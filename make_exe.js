#!/usr/bin/env node
/*
 * Builds a small Windows .exe of the game.
 *
 *   node make_exe.js https://YOUR-APP.onrender.com            (full build)
 *   node make_exe.js https://YOUR-APP.onrender.com --prepare-only   (only prepares exe-build/, no download of the runtime)
 *
 * Run it from the folder that contains index.html and assets/.  Needs Node.js 16.7+ and internet (once).
 *
 * How it stays light: the app is Neutralino (~2 MB runtime). It does NOT bundle a browser - it reuses
 * the Microsoft Edge WebView2 that ships with Windows 10/11 - so the exe is a few MB plus your game files.
 * Multiplayer still talks to your Render server (lobby + direct peer-to-peer link); the game files load
 * from disk, so start-up is instant and there are no ads / no third-party SDKs.
 *
 * Output: exe-build/dist/BasketballStars/BasketballStars-win_x64.exe  (keep resources.neu next to it)
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { spawnSync } = require('child_process');

const server = (process.argv[2] || '').replace(/\/+$/, '');
const prepareOnly = process.argv.includes('--prepare-only');
if (!/^https?:\/\/[^/\s]+$/i.test(server)) {
  console.error('Usage: node make_exe.js https://YOUR-APP.onrender.com [--prepare-only]');
  process.exit(1);
}
if (typeof fs.cpSync !== 'function') {
  console.error('Please update Node.js (16.7 or newer is required).');
  process.exit(1);
}

const root = process.cwd();
const out = path.join(root, 'exe-build');
const res = path.join(out, 'resources');
const BUNDLE = path.join(res, 'assets', 'basketball_legends_2019.min.js');

for (const need of ['index.html', 'assets']) {
  if (!fs.existsSync(path.join(root, need))) {
    console.error('Missing "' + need + '" - run this from the folder that contains index.html and assets/.');
    process.exit(1);
  }
}

// ---------- 1. fresh copy of the game ----------
console.log('1/5  copying game files ...');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(res, { recursive: true });
fs.cpSync(path.join(root, 'assets'), path.join(res, 'assets'), { recursive: true });

// ---------- 2. page: point the multiplayer at your server, drop web-only bits ----------
console.log('2/5  preparing index.html for ' + server + ' ...');
let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const before = html;
html = html.replace(/\s*<script src="\/js\/main\.js"><\/script>/, '');
html = html.replace('src="/socket.io/socket.io.js"', 'src="' + server + '/socket.io/socket.io.js"');
html = html.replace('var socket = io();', 'var socket = io(' + JSON.stringify(server) + ');');
if (!html.includes(server + '/socket.io/socket.io.js') || !html.includes('io(' + JSON.stringify(server) + ')')) {
  console.error('index.html does not look like the multiplayer version (socket.io lines not found). Aborting.');
  process.exit(1);
}
fs.writeFileSync(path.join(res, 'index.html'), html);

// ---------- 3. make the game work offline: the game itself downloads 4 helper scripts at start-up ----------
console.log('3/5  localising the 4 helper scripts the game downloads at start-up ...');
const VENDOR = [
  { file: 'phaser-cachebuster.min.js', orig: 'https://cdn.jsdelivr.net/npm/@orange-games/phaser-cachebuster@2.0/build/phaser-cachebuster.min.js', try: ['https://cdn.jsdelivr.net/npm/@orange-games/phaser-cachebuster@2.0/build/phaser-cachebuster.min.js'] },
  { file: 'phaser-super-storage.min.js', orig: 'https://cdn.jsdelivr.net/npm/@orange-games/phaser-super-storage@1.0/build/phaser-super-storage.min.js', try: ['https://cdn.jsdelivr.net/npm/@orange-games/phaser-super-storage@1.0/build/phaser-super-storage.min.js'] },
  { file: 'BlurX.js', orig: 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurX.js', try: ['https://cdn.jsdelivr.net/gh/photonstorm/phaser-ce@master/filters/BlurX.js', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurX.js'] },
  { file: 'BlurY.js', orig: 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurY.js', try: ['https://cdn.jsdelivr.net/gh/photonstorm/phaser-ce@master/filters/BlurY.js', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurY.js'] }
];

function get(url, hops) {
  hops = hops || 0;
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 15000 }, (r) => {
      if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location && hops < 5) {
        r.resume();
        return resolve(get(new URL(r.headers.location, url).href, hops + 1));
      }
      if (r.statusCode !== 200) { r.resume(); return reject(new Error('HTTP ' + r.statusCode)); }
      const chunks = [];
      r.on('data', (c) => chunks.push(c));
      r.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

(async () => {
  let bundle = fs.existsSync(BUNDLE) ? fs.readFileSync(BUNDLE, 'utf8') : null;
  fs.mkdirSync(path.join(res, 'assets', 'vendor'), { recursive: true });
  for (const v of VENDOR) {
    let data = null;
    for (const u of v.try) {
      try { data = await get(u); if (data && data.length > 200) break; data = null; } catch (e) { /* try next */ }
    }
    if (data && bundle && bundle.includes(v.orig)) {
      fs.writeFileSync(path.join(res, 'assets', 'vendor', v.file), data);
      bundle = bundle.split(v.orig).join('assets/vendor/' + v.file);
      console.log('     ok   ' + v.file);
    } else {
      console.log('     WARN ' + v.file + ' could not be localised - the exe will need internet for it');
    }
  }
  if (bundle) fs.writeFileSync(BUNDLE, bundle);

  // ---------- 4. app config (fixed port keeps localStorage = saves/username/keybinds between launches) ----------
  console.log('4/5  writing app config ...');
  const cfg = {
    applicationId: 'com.basketballstars.online',
    version: '1.0.0',
    defaultMode: 'window',
    port: 48631,
    documentRoot: '/resources/',
    url: '/',
    enableServer: true,
    enableNativeAPI: false,
    tokenSecurity: 'one-time',
    logging: { enabled: false },
    nativeAllowList: [],
    modes: {
      window: {
        title: 'Basketball Stars', width: 1280, height: 740, minWidth: 640, minHeight: 400,
        center: true, fullScreen: false, alwaysOnTop: false, enableInspector: false,
        borderless: false, maximize: false, hidden: false, resizable: true, exitProcessOnClose: true
      }
    },
    cli: { binaryName: 'BasketballStars', resourcesPath: '/resources/', extensionsPath: '/extensions/', clientLibrary: '/resources/js/neutralino.js' }
  };
  fs.writeFileSync(path.join(out, 'neutralino.config.json'), JSON.stringify(cfg, null, 2));

  if (prepareOnly) {
    console.log('\nPrepared exe-build/ (no runtime downloaded). Run without --prepare-only to build the .exe.');
    return;
  }

  // ---------- 5. build ----------
  console.log('5/5  building the exe (downloads the ~2 MB Neutralino runtime) ...');
  const run = (args) => spawnSync('npx', ['--yes', '@neutralinojs/neu'].concat(args), { cwd: out, stdio: 'inherit', shell: true });
  let r = run(['update']);
  if (r.status !== 0) { console.error('\n"neu update" failed (see messages above). Nothing is broken: you can still play with BasketballStars.bat.'); process.exit(1); }
  r = run(['build']);
  if (r.status !== 0) { console.error('\n"neu build" failed (see messages above). Send me that output and I will fix it.'); process.exit(1); }
  console.log('\nDone. Your exe is in:  exe-build/dist/BasketballStars/');
  console.log('Copy BasketballStars-win_x64.exe AND resources.neu together (both are needed).');
})();

@echo off
rem Opens the game in its own app window (no tabs, no address bar) using the Edge that ships with Windows.
rem Zero install, zero extra download. Put your Render address on the next line.
set URL=https://YOUR-APP.onrender.com
start "" msedge --app=%URL% --window-size=1280,760

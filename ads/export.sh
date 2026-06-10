#!/usr/bin/env bash
# Renders every ad template to a pixel-exact PNG in ads/output/.
# Usage: ./ads/export.sh
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd "$(dirname "$0")"
mkdir -p output

render() {
  local file="$1" w="$2" h="$3"
  "$CHROME" --headless --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=1 --window-size="${w},${h}" \
    --virtual-time-budget=3000 \
    --screenshot="output/${file%.html}.png" "file://$PWD/$file" 2>/dev/null
  echo "rendered output/${file%.html}.png"
}

render blueprint-1200x628.html 1200 628
render blueprint-1200x1200.html 1200 1200
render launchpad-1200x628.html 1200 628
render launchpad-1200x1200.html 1200 1200

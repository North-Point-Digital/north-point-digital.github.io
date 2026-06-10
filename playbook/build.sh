#!/usr/bin/env bash
# Renders the playbook HTML to public/downloads/ai-adoption-playbook.pdf.
# Usage: ./playbook/build.sh
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd "$(dirname "$0")"
mkdir -p ../public/downloads

"$CHROME" --headless --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="../public/downloads/ai-adoption-playbook.pdf" \
  --virtual-time-budget=4000 \
  "file://$PWD/playbook.html" 2>/dev/null

echo "rendered public/downloads/ai-adoption-playbook.pdf"

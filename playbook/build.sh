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

# Page previews for the landing page (requires poppler: brew install poppler).
if command -v pdftoppm >/dev/null 2>&1; then
  PREVIEW_DIR="../public/images/playbook"
  mkdir -p "$PREVIEW_DIR"
  PDF="../public/downloads/ai-adoption-playbook.pdf"
  pdftoppm -jpeg -jpegopt quality=82 -r 110 -singlefile -f 1 -l 1 "$PDF" "$PREVIEW_DIR/preview-cover"
  pdftoppm -jpeg -jpegopt quality=82 -r 110 -singlefile -f 7 -l 7 "$PDF" "$PREVIEW_DIR/preview-rag"
  pdftoppm -jpeg -jpegopt quality=82 -r 110 -singlefile -f 14 -l 14 "$PDF" "$PREVIEW_DIR/preview-framework"
  echo "rendered previews to public/images/playbook/"
else
  echo "pdftoppm not found; skipping previews"
fi

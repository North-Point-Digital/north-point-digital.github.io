# Ad creative pipeline

On-brand ad images generated from HTML templates — same fonts, palette and
textures as the website. Nothing in this folder is deployed to the site.

## Regenerate the images

```sh
./ads/export.sh
```

Outputs pixel-exact PNGs to `ads/output/` via headless Chrome. Edit the HTML
templates (copy lives in the markup), re-run, done.

## Current creatives

| File | Size | Use |
|---|---|---|
| blueprint-1200x628 | 1200×628 (1.91:1) | Google responsive display / Meta / LinkedIn landscape |
| blueprint-1200x1200 | 1200×1200 (1:1) | Google responsive display / social square |
| launchpad-1200x628 | 1200×628 | as above |
| launchpad-1200x1200 | 1200×1200 | as above |

Google responsive display ads also want logos: use `public/logo512.png`
(square) directly.

## Adding a new creative

Copy an existing HTML file, change the copy, add a `render` line to
`export.sh`. Copy rules: UK English, the docs/redesign-spec.md ban list,
claims must match the live site (fixed fees, six weeks, the 25% guarantee,
£15–25k Launchpad range).

## Video

See `video-scripts.md` — scripts and production options. Short version:
founder-to-camera beats everything else at this budget.

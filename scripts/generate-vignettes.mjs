// Generates on-brand 1200x630 vignette images for each blog post and wires them
// into frontmatter as `thumbnailImage` (which also feeds OG/Article schema via the
// [slug].astro fallback chain). Re-run after adding a post:  node scripts/generate-vignettes.mjs
import sharp from 'sharp';
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BLOG_DIR = 'src/content/blog';
const OUT_DIR = 'public/images/blog';
mkdirSync(OUT_DIR, { recursive: true });

const ACCENT='#2563eb', ACCENT_DK='#1d4ed8', AMBER='#f59e0b', INK='#0f172a', SLATE='#64748b', SLATE3='#cbd5e1';
const esc = (s)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function wrap(title, max){
  const words=title.split(' '); const lines=[]; let cur='';
  for(const w of words){ if((cur+' '+w).trim().length>max){ if(cur)lines.push(cur); cur=w; } else cur=(cur+' '+w).trim(); }
  if(cur)lines.push(cur); return lines;
}

function motif(cat){
  const x=900,y=355;
  if(cat==='AI Agents') return `<g transform="translate(${x},${y})" opacity="0.92">
    <line x1="40" y1="40" x2="150" y2="0" stroke="${ACCENT}" stroke-width="3"/>
    <line x1="40" y1="40" x2="150" y2="120" stroke="${ACCENT}" stroke-width="3"/>
    <line x1="150" y1="0" x2="150" y2="120" stroke="${SLATE3}" stroke-width="3"/>
    <circle cx="40" cy="40" r="22" fill="${ACCENT}"/><circle cx="150" cy="0" r="16" fill="${AMBER}"/><circle cx="150" cy="120" r="16" fill="${ACCENT_DK}"/></g>`;
  if(cat==='AI Explainers') return `<g transform="translate(${x+30},${y+30})" fill="none" opacity="0.92">
    <circle cx="80" cy="40" r="20" fill="${ACCENT}"/><circle cx="80" cy="40" r="48" stroke="${ACCENT}" stroke-width="3"/>
    <circle cx="80" cy="40" r="76" stroke="${SLATE3}" stroke-width="3"/><circle cx="158" cy="-18" r="10" fill="${AMBER}"/></g>`;
  if(cat==='AI Strategy') return `<g transform="translate(${x},${y})" opacity="0.95">
    <rect x="0" y="80" width="30" height="40" rx="4" fill="${SLATE3}"/><rect x="45" y="50" width="30" height="70" rx="4" fill="${ACCENT}"/>
    <rect x="90" y="20" width="30" height="100" rx="4" fill="${ACCENT_DK}"/><circle cx="135" cy="6" r="12" fill="${AMBER}"/></g>`;
  return `<g transform="translate(${x},${y})" opacity="0.95">
    <rect x="0" y="80" width="150" height="34" rx="8" fill="${ACCENT}"/><rect x="22" y="42" width="106" height="34" rx="8" fill="${SLATE3}"/>
    <rect x="44" y="4" width="62" height="34" rx="8" fill="${AMBER}"/></g>`;
}

function svg({title,category}){
  const len=title.length;
  let fontSize, max; if(len<=45){fontSize=60;max=20;} else if(len<=66){fontSize=50;max=25;} else {fontSize=42;max=30;}
  const lines=wrap(title,max).slice(0,4);
  const lineHeight=Math.round(fontSize*1.2);
  const startY=Math.round(360-(lines.length-1)*(lineHeight/2));
  const tspans=lines.map((l,i)=>`<tspan x="80" dy="${i===0?0:lineHeight}">${esc(l)}</tspan>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="tint" cx="50%" cy="0%" r="75%"><stop offset="0%" stop-color="#dbeafe"/><stop offset="70%" stop-color="#ffffff"/></radialGradient>
    <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="${SLATE3}"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#tint)"/>
  <rect width="1200" height="630" fill="url(#dots)" opacity="0.45"/>
  <g transform="translate(80,72)">
    <rect x="0" y="0" width="13" height="13" rx="2" fill="${ACCENT}"/><rect x="17" y="0" width="13" height="13" rx="2" fill="${AMBER}"/>
    <rect x="0" y="17" width="13" height="13" rx="2" fill="${ACCENT_DK}"/><rect x="17" y="17" width="13" height="13" rx="2" fill="${ACCENT}"/>
    <text x="44" y="24" font-family="Geist Variable, Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="${INK}">North Point Digital</text>
  </g>
  <text x="80" y="250" font-family="Geist Mono Variable, ui-monospace, Menlo, monospace" font-size="22" letter-spacing="3" font-weight="600" fill="${ACCENT}">${esc(category.toUpperCase())}</text>
  <text y="${startY}" font-family="Geist Variable, Inter, Helvetica, Arial, sans-serif" font-size="${fontSize}" font-weight="600" letter-spacing="-1.5" fill="${INK}">${tspans}</text>
  ${motif(category)}
  <text x="80" y="585" font-family="Geist Mono Variable, ui-monospace, Menlo, monospace" font-size="18" fill="${SLATE}">northpointdigital.com</text>
  <rect x="0" y="622" width="1200" height="8" fill="${ACCENT}"/>
</svg>`;
}

const files = readdirSync(BLOG_DIR).filter(f=>f.endsWith('.mdx'));
for(const file of files){
  const slug=file.replace(/\.mdx$/,'');
  const path=join(BLOG_DIR,file);
  let raw=readFileSync(path,'utf8');
  const title=(raw.match(/^title:\s*"(.+?)"\s*$/m)||[])[1];
  const category=(raw.match(/^category:\s*"(.+?)"\s*$/m)||[])[1];
  if(!title||!category){console.warn('skip (no title/category):',file);continue;}
  const out=join(OUT_DIR,`${slug}.webp`);
  await sharp(Buffer.from(svg({title,category}))).webp({quality:88}).toFile(out);
  const rel=`/images/blog/${slug}.webp`;
  if(/^thumbnailImage:/m.test(raw)){
    raw=raw.replace(/^thumbnailImage:.*$/m,`thumbnailImage: "${rel}"`);
  } else {
    raw=raw.replace(/^(category:.*\n)/m,`$1thumbnailImage: "${rel}"\n`);
  }
  writeFileSync(path,raw);
  console.log(`${slug.padEnd(52)} [${category}] -> ${rel}`);
}
console.log(`\n${files.length} vignettes generated.`);

# D'YEA — Bassstar Mission (Astro site, Phase 1a)

Single-scroll Command Center one-pager + clean Sync/Licensing page.
Static, fast, SEO-ready (JSON-LD MusicAlbum). HUD design system; acid
green reserved for interactive states only; explicit content kept off
the public layer.

## Run
    npm install
    npm run dev        # local preview at localhost:4321
    npm run build      # static output -> dist/

## Deploy (any static host)
Push `dist/` to Netlify, Vercel, Cloudflare Pages, or GitHub Pages.
Set the real domain in `astro.config.mjs` (`site:`) before launch.

## Edit content (no code)
- Tracks:   src/data/tracks.json  (title, threat/mood, anchor lyric, explicit, encrypted)
- Crew:     src/data/crew.json
- Lore:     codex[] in src/pages/index.astro
- Colors/type: src/styles/global.css (CSS variables at top)

## Before launch (gates)
- [ ] Confirm distributor mints NEW ISRCs + SoundExchange on the remaster
- [ ] Brailey: name/credit OK to publish; NO likeness/endorsement until cleared
- [ ] Set public licensing email in src/pages/sync.astro (CONTACT)
- [ ] Wire email capture to a real provider (form is stubbed for Netlify Forms)
- [ ] Drop real cover art + hero ship render when assets land

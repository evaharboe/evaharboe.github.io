# Eva Harboe – personal site

Astro 5, static, deployed to GitHub Pages.

## Run it
    npm install
    npm run dev      # http://localhost:4321

## Where things live
- `src/content/projects/*.md` – one file per tech project (frontmatter + write-up)
- `src/content/races/*.md` – one file per race. Leave out `time` for an upcoming race.
- `src/pages/index.astro` – homepage with the two paths
- `src/pages/tech/` – Tech side (list + a page per project)
- `src/pages/life/index.astro` – Life side (yoga, running, retreats, snow)
- `src/components/Footer.astro` – contact links
- `src/styles/global.css` – palette and fonts (colour tokens at the top)


Search for `TODO(Eva)` to find everything that needs your input.

## Visa note
Until the Graduate visa (Jul 2027): no prices, booking links or "hire me" on the Life side.

## Deploy
    npm run deploy

This builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves
(Settings → Pages → Source: Deploy from a branch → `gh-pages` / root). Custom domain: evaharboe.com (`public/CNAME`).

Commit and push your source changes to `main` as usual; `npm run deploy` is what updates the live site.

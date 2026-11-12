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
1. Create a GitHub repo (`<username>.github.io` for a root URL, or any name and set `base` in `astro.config.mjs`).
2. Set `site` in `astro.config.mjs`.
3. Repo Settings → Pages → Source: GitHub Actions.
4. Push to `main`; `.github/workflows/deploy.yml` builds and deploys.

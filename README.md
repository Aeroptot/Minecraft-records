# Overworld Archive

A personal Minecraft world website built with [Astro](https://astro.build). Publish articles and world timeline entries by adding Markdown files — no code changes required.

**Live site:** `https://your-username.github.io/Minecraft-records/` (update after configuring GitHub Pages)

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321/Minecraft-records/](http://localhost:4321/Minecraft-records/) — the base path matches GitHub Pages.

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## GitHub Pages configuration

This repository is configured for a **project site** at:

```
https://<your-github-username>.github.io/Minecraft-records/
```

### What to change if your setup differs

Edit **`astro.config.mjs`**:

| Setting | Current value | Change when… |
|---------|---------------|--------------|
| `GITHUB_USERNAME` | `your-username` | Your GitHub username differs |
| `REPOSITORY_NAME` | `Minecraft-records` | Your repository name differs |

**Examples:**

- Repository `minecraft-world` under user `alex` → site is `https://alex.github.io/minecraft-world/`
  - Set `GITHUB_USERNAME = 'alex'` and `REPOSITORY_NAME = 'minecraft-world'`

- **User/organization site** (repository named `your-username.github.io`) → site is `https://your-username.github.io/`
  - Set `base: '/'` and `site: 'https://your-username.github.io'`

After changing these values, rebuild and redeploy.

### Enable GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to the `main` branch — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

Your site will be live at the URL derived from your username and repository name.

---

## Publishing workflow (Obsidian → GitHub)

```
Write in Obsidian → Add to repo → Commit & push → GitHub Actions deploys
```

No website code edits needed for content.

### Add a new article

1. Copy `templates/article-template.md` to `src/content/articles/your-slug.md`
2. Fill in front matter and write your content
3. Set `draft: false` when ready to publish
4. Add cover/screenshot images to `public/images/articles/`
5. Reference images in Markdown:

   ```md
   ![Description](/images/articles/my-screenshot.png)
   ```

6. Commit and push to `main`

**URL:** `/articles/your-slug/` (filename without `.md` becomes the slug)

### Add a world timeline entry

1. Copy `templates/world-entry-template.md` to `src/content/world/your-slug.md`
2. Fill in front matter (date, version, phase, etc.)
3. Set `draft: false` when ready
4. Add images to `public/images/world/`
5. Link related articles in front matter:

   ```yaml
   relatedArticles:
     - "/articles/compact-iron-farm/"
   ```

6. Commit and push

**URL:** `/world/your-slug/`

### Add images

Place files in:

```
public/images/articles/   ← article screenshots and covers
public/images/world/      ← timeline screenshots and covers
```

Reference them with root-relative paths (leading `/`):

```md
![Alt text](/images/world/my-build.png)
```

Front matter cover/gallery paths use the same format:

```yaml
cover: "/images/world/my-build.png"
```

### Edit site-wide settings

Edit **`src/config/site.ts`** to update:

- Site title, your name, bio, project introduction
- GitHub and Modrinth links
- External links dropdown
- Current objectives panel (homepage)
- World overview stats (world page)
- Hero and featured images

Commit and push — no other code changes needed.

---

## Project structure

```
src/
  components/       UI components (cards, nav, timeline, etc.)
  config/
    site.ts         ← Edit your name, links, objectives, world overview
  content/
    articles/       ← Your article Markdown files
    world/          ← Your world timeline Markdown files
    config.ts       Content schemas (validation)
  layouts/          Page layouts
  pages/            Routes (auto-generated from content)
  styles/           Global CSS
  utils/            Content helpers

public/
  images/
    articles/       Article images
    world/          World timeline images

templates/          Copy-paste templates for Obsidian
.github/workflows/  GitHub Actions deployment
```

---

## Content schemas

### Article (required fields)

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Article title |
| `description` | Yes | Summary for cards |
| `date` | Yes | Publication date |
| `category` | Yes | e.g. Tutorial, Guide |
| `tags` | No | Array of tags |
| `cover` | No | Cover image path |
| `draft` | No | `true` hides from site |

### World entry (required fields)

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Milestone title |
| `description` | Yes | Summary for timeline |
| `date` | Yes | Milestone date |
| `minecraftVersion` | Yes | Game version |
| `phase` | Yes | World phase label |
| `location` | No | In-world location |
| `coordinates` | No | X/Y/Z coordinates |
| `gallery` | No | Array of image paths |
| `relatedArticles` | No | Links to articles |
| `draft` | No | `true` hides from site |

Invalid or missing required fields produce a clear build error.

---

## Troubleshooting

### Images not loading on GitHub Pages

- Use paths starting with `/images/...` (not relative paths like `./images/...`)
- Ensure images are in `public/images/`, not `src/`
- Verify `REPOSITORY_NAME` in `astro.config.mjs` matches your GitHub repository name
- After changing `base`, rebuild with `npm run build`

### Site shows 404 on GitHub Pages

- Confirm **Settings → Pages → Source** is set to **GitHub Actions**
- Check the Actions tab for build errors
- Ensure you're visiting `https://username.github.io/repository-name/` (with trailing path)

### Draft content appearing

- Set `draft: false` in front matter
- Draft entries are filtered out at build time

### Build fails on content

- Read the error message — it points to the file and missing field
- Compare your front matter against the templates in `templates/`

### Local dev URL

The dev server uses the same `base` path as production. Visit `http://localhost:4321/Minecraft-records/` not the root.

---

## Sample content

The repository includes sample files you can edit or replace:

- **Articles:** `compact-iron-farm.md`, `starter-base-layout.md`
- **World entries:** `first-night-shelter.md`, `riverside-base.md`, `nether-hub-redesign.md`

Placeholder SVG images in `public/images/` are labeled for easy replacement.

---

## License

Personal project — customize freely for your own Minecraft archive.

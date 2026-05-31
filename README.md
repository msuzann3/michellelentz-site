# Michelle Lentz Personal Site

Static personal/professional website for Michelle Lentz.

Live site: https://michelleslentz.com
Repository: https://github.com/msuzann3/michellelentz-site
Hosting: GitHub Pages
Domain/DNS: GoDaddy
HTTPS: Enforced

## Project Purpose

This site presents Michelle's work in AI strategy, learning, change, writing, speaking, and technical communication. It is intentionally a static HTML/CSS site so it can be edited, previewed, and deployed with minimal tooling.

The project was recovered from a Netlify deploy ZIP and then refined in Codex. Keep this README and `CHANGELOG.md` current after each meaningful editing session so Codex instances on multiple laptops can quickly regain context.

## Site Structure

- `index.html` - Home page
- `resume/index.html` - About page
- `work/index.html` - Portfolio/work samples
- `writing/index.html` - Writing, books, guides, and articles
- `speaking/index.html` - Speaking, workshops, podcasts, and interviews
- `assets/site.css` - Shared styles
- `assets/` - Favicons, avatar, Open Graph image, and shared visual assets
- `samples/ai-academy-ethics/` - Hosted Storyline sample
- `about/index.html` - Static redirect from `/about/` to the About page
- `CNAME` - GitHub Pages custom domain marker for `michelleslentz.com`
- `.nojekyll` - Tells GitHub Pages to publish the static files as-is
- `deployment.md` - Deployment notes
- `site.webmanifest` - Web app/favicons manifest

## Design Direction

The site should feel professional, warm, candid, and Michelle. Keep the tone direct and lightly fun, not goofy.

Brand colors:

- Midnight: `#0D1B35`
- Emerald: `#0B8F68`
- Azure: `#60A5FA`
- Periwinkle: `#93C5FD`
- Sky: `#EFF6FF`
- Silver: `#F8FAFC`

Typography:

- Headings: Syne
- Body/UI: Outfit

Avatar:

- Use `assets/michelle-avatar-emerald-outline.png`
- The outlined emerald avatar can sit on navy hero sections, but keep avatar usage polished and intentional.

## Content Guidelines

- Preserve the static-site structure.
- Use existing CSS and card patterns before adding new styling.
- Header navigation order should remain: About, Writing, Speaking, Work, LinkedIn.
- `resume/index.html` is the About page. Visible page identity should say About, not Resume.
- External `http` and `https` links should include `target="_blank"` and `rel="noopener noreferrer"`.
- Keep the Plausible analytics snippet in the head of each main page.
- Keep the copyright line:
  `© All content copyright Michelle S. Lentz 1998-2025.`
- Footer on each main page should include:
  Michelle Lentz, Seattle, Washington, a page-specific sentence, and "Open to alternative time zones, travel, and relocation."
- The AI Governance document belongs in Writing/archive context, not as a homepage feature.
- The Storyline sample under `samples/ai-academy-ethics/` should remain intact.

## Local Preview

There is no build step. You can open `index.html` directly in a browser, or run a simple local static server from the project root.

Example:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## GitHub Pages

GitHub Pages should publish from the `main` branch at the repository root.

Repository settings:

- Build command: none
- Source: deploy from a branch
- Branch: `main`
- Folder: `/ (root)`
- Custom domain: `michelleslentz.com`
- Enforce HTTPS: enabled

The `CNAME` file should contain:

```text
michelleslentz.com
```

At GoDaddy, point `www` to the GitHub Pages default domain for this repo and point the apex domain records at GitHub Pages. The live site resolves at `https://michelleslentz.com/`, with `https://www.michelleslentz.com/` redirecting to the apex domain.

## Working Across Laptops

Use GitHub as the source of truth and iCloud as a convenience sync layer.

Recommended workflow:

1. Pull latest changes before editing.
2. Make site edits.
3. Update `CHANGELOG.md` with the session date and files changed.
4. Commit and push.
5. Let GitHub Pages deploy from GitHub.

## Codex Session Checklist

When Codex edits this site:

1. Inspect relevant files before editing.
2. Preserve the static structure and existing design patterns.
3. Verify local links/assets where practical.
4. Verify external links include `target="_blank"` and `rel="noopener noreferrer"`.
5. Update `CHANGELOG.md`.
6. Tell Michelle exactly which files changed.

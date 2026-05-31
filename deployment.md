# Deployment Notes

This is a static website. There is no build step.

## Preview locally

Open `index.html` directly, or run a local static server from this folder.

## GitHub Pages hosting

GitHub Pages is the production host for this site.

Repository settings:

1. Source: deploy from a branch.
2. Branch: `main`.
3. Folder: `/ (root)`.
4. Custom domain: `michelleslentz.com`.
5. Enforce HTTPS: enabled.

The repo includes a `CNAME` file for the custom domain and a `.nojekyll` file so GitHub Pages publishes the static files as-is.

## GoDaddy DNS for GitHub Pages

At GoDaddy, replace the old Netlify records with GitHub Pages records:

- `www` should be a `CNAME` record pointing to `msuzann3.github.io`.
- The apex/root domain should use these GitHub Pages `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
- If GoDaddy supports IPv6 records, add these GitHub Pages `AAAA` records too: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, and `2606:50c0:8003::153`.

HTTPS is provisioned and enforced. The live site resolves at `https://michelleslentz.com/`, and `https://www.michelleslentz.com/` redirects to the apex domain.

## GoDaddy hosting

If GitHub Pages is unavailable, GoDaddy static hosting is the fallback. Upload the contents of this folder so that `index.html` is at the web root. Keep the folder structure intact:

- `assets/`
- `work/`
- `writing/`
- `speaking/`
- `resume/`

## Notes

- The avatar is only used on a light hero background.
- The AI Governance guide remains in Writing, but is not featured on the homepage.
- Speaking includes a public presentation PDF folder plus individual links where available.

# Michelle Lentz Personal Site

Current working directory note: this MacBook Pro uses `/Users/michelle/Documents/_AI-Workspace/Codex/michelleslentz-site`. Michelle's MacBook Air is named `dolly` and may have a different path before `Documents`, but both machines should match from `Documents/_AI-Workspace/Codex/michelleslentz-site` onward so iCloud keeps the project synced.

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
- `resume/technical-writer-editor-resume.pdf` - Focused technical writing and editing resume
- `work/index.html` - Portfolio/work samples
- `work/visa-learning-intake/index.html` - Learning Intake Triage Workflow design case study
- `work/the-whom/index.html` - Musical Grammar Rectifier n8n/GPT-4o workflow case study
- `work/mission-responsible-ai/index.html` - Intro and LMS implementation context for the adaptive Mission: Responsible AI course
- `technical-writing/index.html` - Focused technical writing and editing contract portfolio
- `technical-writing/samples/` - Portfolio-safe, locally hosted sample PDFs with production dates removed
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
- Shared avatar page heroes use a compact laptop-friendly title scale, reduced vertical padding, and a smaller responsive avatar so the next page section remains visible without sacrificing the blue header identity or navigation usability.

## Content Guidelines

- Preserve the static-site structure.
- Use existing CSS and card patterns before adding new styling.
- Keep descriptive copy inside Work page cards at normal font weight. Card titles, metadata, link labels, and tags may retain their intentional emphasis.
- Header navigation order should remain: About, Writing, Speaking, Work, LinkedIn.
- `resume/index.html` is the About page. Visible page identity should say About, not Resume.
- The About hero links to LinkedIn without a resume callout. Its bottom review-links grid appears in this order: LinkedIn, Presentation Library, Selected Work Portfolio, and Technical Writing & Editing Portfolio; the focused technical-writing portfolio opens in a new tab.
- External `http` and `https` links should include `target="_blank"` and `rel="noopener noreferrer"`.
- Keep the Plausible analytics snippet in the head of each main page.
- Keep the copyright line:
  `© All content copyright Michelle S. Lentz 1998-2025.`
- Footer on each main page should include:
  Michelle Lentz, Seattle, Washington, a page-specific sentence, and "Open to alternative time zones, travel, and relocation."
- The AI Governance document belongs in Writing/archive context, not as a homepage feature.
- The focused Technical Writing & Editing portfolio lives at `https://michelleslentz.com/technical-writing/`. It presents six curated, undated samples for contract prospects, including a case study built from Michelle's visible substantive-editing comments, and links to the broader Work archive for additional evidence. Portfolio PDFs are hosted in `technical-writing/samples/`; use these scrubbed copies rather than linking the dated Drive originals.
- The focused Technical Writer & Editor resume lives at `https://michelleslentz.com/resume/technical-writer-editor-resume.pdf`. It leads with recent documentation work at Innovate + Elevate, ELB Learning, UPS, and Oracle, then groups older direct technical-writing roles as undated selected foundations.
- Michelle has completed her MSc in AI in Business at Arizona State University. The editable Word resume is maintained as a black-only ATS version; the public website PDF uses the site's branded visual treatment.
- The public resume PDF omits Michelle's phone number. The private ATS Word resume and application copy retain it for direct job applications.
- Private technical-writing application materials and the scripts used to prepare the resume and portfolio samples live at `private/technical-writing/` inside this canonical iCloud project. That folder is intentionally ignored by Git because it contains personal contact information; do not publish or commit it. Use this shared project copy instead of the temporary `Documents/Codex/2026-08-03/i-ne/` task folder.
- The AI Governance document is hosted in this repository at `writing/from-risk-to-responsibility-ai-governance.pdf`; use `https://michelleslentz.com/writing/from-risk-to-responsibility-ai-governance.pdf` as its stable public and LinkedIn URL. Its PDF document properties identify the title as "AI Governance in Your Organization" and the author as Michelle Lentz.
- The Writing page is organized into Featured Writing; Books, Guides, and Long-Form Work; Articles; and Personal Projects and Archive. Featured Writing contains exactly three cards in this order: `From Risk to Responsibility`, `Partner with AI for Instructional Design`, and `From Content Creators to Capability Architects`. Its compact section navigator and end-of-section Back to top links remain same-tab, while every destination card opens safely in a new tab.
- Mission: Responsible AI is a self-directed portfolio sample Michelle created to demonstrate her current approach to scenario-based eLearning and responsible AI. The course remains a standalone ChatGPT Sites experience at `https://risk-responsibility-lab.msuzann3.chatgpt.site/`. Its Work card opens the local `work/mission-responsible-ai/` introduction in a new tab; that page links to the source `From Risk to Responsibility` white paper and explains Michelle's design authorship, Codex-assisted implementation, learning approach, and potential SCORM/xAPI/cmi5 instrumentation before linking to the course.
- The Mission: Responsible AI Work card explicitly identifies the course as based on Michelle's white paper, `From Risk to Responsibility: AI Governance in Your Organization`. In Graduate Program Projects, Vinyl Curator Capstone appears first. In Learning and Technical Writing Samples, the focused Technical Writing & Editing portfolio appears second, immediately after Muppet Magic.
- The Writing page Articles section leads with the Muppet instructional-design article, followed by the Agile and transformational-change articles; `Two Different Ways to Prompt Your Favorite AI` appears last. `Action 2: Learning at Scale` is credited only on its own card as co-authored with Brandon Carson and Dr. Markus Bernhardt.
- The AI-Ready Recruiting Workshop belongs in the top Work page section after the first three featured AI cards. Link to the individual PDFs and the shared Drive folder from the card.
- The Work page is organized into Featured Work, Professional Work, Graduate Program Projects, Learning and Technical Writing Samples, and Earlier Experiments and Archive. Its compact section navigator and end-of-section Back to top links make all five groups directly navigable.
- Featured Work contains exactly four cards: the Learning Intake Triage Workflow, AI Academy, AI Organizational Readiness Tool, and Mission: Responsible AI. The intake case study presents a governed consultation architecture in direct, time-neutral design language; do not imply production use or expose proprietary configuration, prompts, data, or credentials.
- The Vinyl Curator Capstone card links to `https://capstone.curatevinyl.com`, records the 4.0 MSc in AI in Business result, and describes the verified React/TypeScript/Firebase/Firestore/Express stack.
- The Open Weights card highlights the interactive six-knob explainer at `https://msuzann3.github.io/explainers/0727/` and includes the related LinkedIn post as a secondary link.
- The Musical Grammar Rectifier card links to the internal `work/the-whom/` case study but intentionally opens it in a new tab.
- The AI Organizational Readiness Tool now lives at `https://ready.innovate-elevate.ai`.
- The Work and Speaking pages include compact "On this page" menus below their hero sections, with anchored links to every major content section.
- The Speaking page leads with the upcoming Brain, Heart, and Courage session at Training 2027 Conference & Expo in February 2027, followed by the September 2026 TechLearn session and May 2026 ATD presentation.
- The Ziplines Education AI Essentials speaking entry uses the date range December 2024–January 2026.
- The archived BrandonBot card notes Michelle's intention to rebuild the custom GPT with a Firebase backend.
- Recent hour-long conference sessions can count as training/workshop samples when they include activities, handouts, live polling, audience interaction, or facilitation design. Keep AI/change sessions in the top Work section and non-AI learning design sessions in the Learning + writing section.
- During interview prep, the Work page may temporarily prioritize training samples at the top of the Current AI work section, with broader AI tools and site builds moved after training evidence.
- The Storyline sample under `samples/ai-academy-ethics/` should remain intact. Storyline-generated asset filenames are case-sensitive on GitHub Pages, even when they appear to work locally on macOS, so preserve the exact mixed-case filenames and referenced asset locations from the export.

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

Use GitHub as the source of truth and iCloud as a convenience sync layer. The project folder should remain `Documents/_AI-Workspace/Codex/michelleslentz-site` from the `Documents` folder onward so it stays synced between Michelle's MacBook Pro and MacBook Air (`dolly`).

Recommended workflow:

1. Pull latest changes before editing.
2. Read `README.md` and `CHANGELOG.md` at the beginning of each Codex session.
3. Make site edits.
4. Update `README.md` and `CHANGELOG.md` whenever project context, workflow, or files change.
5. Commit and push.
6. Let GitHub Pages deploy from GitHub.

## Codex Session Checklist

When Codex edits this site:

1. Confirm the project folder is `Documents/_AI-Workspace/Codex/michelleslentz-site`.
2. Read `README.md` and `CHANGELOG.md` before making changes.
3. Inspect relevant files before editing.
4. Preserve the static structure and existing design patterns.
5. Verify local links/assets where practical.
6. Verify external links include `target="_blank"` and `rel="noopener noreferrer"`.
7. Update `README.md` and `CHANGELOG.md` for meaningful changes.
8. Tell Michelle exactly which files changed.

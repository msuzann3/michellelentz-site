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
- `work/index.html` - Portfolio page and samples; public route remains `/work/`
- `work/visa-learning-intake/index.html` - Learning Intake Triage Workflow design case study
- `work/ai-academy/index.html` - Enterprise AI Academy case study and layered learning pyramid
- `work/ai-organizational-readiness/index.html` - AI Organizational Readiness Tool case study
- `work/ziplines-ai-automations/index.html` - Ziplines AI automations governance and change case study
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
- The homepage hero uses a tighter title scale, reduced vertical padding and action spacing, and a smaller avatar treatment so the beginning of the next section is visible in a typical 14-inch laptop viewport.

## Content Guidelines

- Preserve the static-site structure.
- Use existing CSS and card patterns before adding new styling.
- Keep descriptive copy inside Portfolio page cards at normal font weight. Card titles, metadata, link labels, and tags may retain their intentional emphasis.
- Header navigation order should remain: About, Writing, Speaking, Portfolio, LinkedIn. The public URL remains `/work/`.
- `resume/index.html` is the About page. Visible page identity should say About, not Resume.
- The About hero has no action buttons because both Portfolio and LinkedIn remain available in the persistent header. The About page does not link to a downloadable resume. Its bottom review-links grid appears in this order: LinkedIn, Presentation Library, AI Case Studies & Portfolio, and Technical Writing & Editing Portfolio; the focused technical-writing portfolio opens in a new tab.
- External `http` and `https` links should include `target="_blank"` and `rel="noopener noreferrer"`.
- Keep the Plausible analytics snippet in the head of each main page.
- Keep the copyright line:
  `© All content copyright Michelle S. Lentz 1998-2025.`
- Footer on each main page should include:
  Michelle Lentz, Seattle, Washington, a page-specific sentence, and "Open to alternative time zones, travel, and relocation."
- The AI Governance document belongs in Writing/archive context, not as a homepage feature.
- The focused Technical Writing & Editing portfolio lives at `https://michelleslentz.com/technical-writing/`. It leads with four curated bodies of work for contract prospects: engineering proposal editing, substantive article editing, UPS GBS documentation standards, and selected Oracle documentation. The Oracle card combines the Talent Management Essentials quick-start guide with Growth Potential and Learning Paths job aids from separate Oracle projects. A secondary archive leads with the combined Panstoria/Creative Memories digital-scrapbooking documentation and retains SAP and TekWorx formats. The Pre-Recording Checklist belongs with LCA virtual training on the main Portfolio. AI Governance remains on Writing rather than appearing in the Technical Writing portfolio. Portfolio PDFs are hosted in `technical-writing/samples/`; use these scrubbed copies rather than linking the dated Drive originals when available.
- The focused Technical Writer & Editor PDF remains hosted at `https://michelleslentz.com/resume/technical-writer-editor-resume.pdf` and is linked publicly only from the Technical Writing & Editing portfolio under the label `View Technical Writing Experience`. It is intentionally retained because it presents a specialized technical-writing history that differs substantially from LinkedIn. General site visitors are directed to LinkedIn rather than a downloadable resume.
- Michelle has completed her MSc in AI in Business at Arizona State University. The editable Word resume is maintained as a black-only ATS version; the public website PDF uses the site's branded visual treatment.
- The homepage identifies Michelle's 4.0 across both technical and business coursework in the MSc program and uses the preferred credential wording `MSc in AI in Business, Arizona State University`.
- The About page repeats the 4.0 in the MSc credential card, removes the MBTI and Gallup insight-report cards, and uses a white Range section to separate it visually from the sky-blue Credentials section.
- The public resume PDF omits Michelle's phone number. The private ATS Word resume and application copy retain it for direct job applications.
- Private technical-writing application materials and the scripts used to prepare the resume and portfolio samples live at `private/technical-writing/` inside this canonical iCloud project. That folder is intentionally ignored by Git because it contains personal contact information; do not publish or commit it. Use this shared project copy instead of the temporary `Documents/Codex/2026-08-03/i-ne/` task folder.
- The AI Governance document is hosted in this repository at `writing/from-risk-to-responsibility-ai-governance.pdf`; use `https://michelleslentz.com/writing/from-risk-to-responsibility-ai-governance.pdf` as its stable public and LinkedIn URL. Its PDF document properties identify the title as "AI Governance in Your Organization" and the author as Michelle Lentz.
- The Writing page is organized into Featured Writing; Books, Guides, and Long-Form Work; Articles; and Personal Projects and Archive. Featured Writing contains exactly three cards in this order: `From Risk to Responsibility`, `Partner with AI for Instructional Design`, and `From Content Creators to Capability Architects`. Its compact section navigator and end-of-section Back to top links remain same-tab, while every destination card opens safely in a new tab.
- Mission: Responsible AI is a self-directed portfolio sample Michelle created to demonstrate her current approach to scenario-based eLearning and responsible AI. The course remains a standalone ChatGPT Sites experience at `https://risk-responsibility-lab.msuzann3.chatgpt.site/`. Its Work card opens the local `work/mission-responsible-ai/` introduction in a new tab; that page links to the source `From Risk to Responsibility` white paper and explains Michelle's design authorship, Codex-assisted implementation, learning approach, and potential SCORM/xAPI/cmi5 instrumentation before linking to the course.
- The Mission: Responsible AI card leads Professional Work and explicitly identifies the experience as a working course Michelle designed and built to demonstrate current course-design capability. In Graduate Program Projects, Vinyl Curator Capstone appears first. In Learning and Technical Writing Samples, the focused Technical Writing & Editing portfolio appears second, immediately after Muppet Magic. The LCA virtual-training sample and Pre-Recording Checklist share one `Virtual Training Design & Production Support` card.
- The Writing page Articles section leads with the Muppet instructional-design article, followed by one combined `Agile in Learning & Development` card linking the published article, detailed presentation, and white paper; `Two Different Ways to Prompt Your Favorite AI` appears last. `Action 2: Learning at Scale` is credited only on its own card as co-authored with Brandon Carson and Dr. Markus Bernhardt.
- The AI-Ready Recruiting Workshop remains in Professional Work. Link to the individual PDFs and the shared Drive folder from the card.
- Recruiter Scam Check appears in Professional Work immediately after the AI-Ready Recruiting Workshop. It links to `https://file-handler-lentzmichelles.replit.app/`, flags recruiter-message risk indicators without making a definitive fraud determination, and opens in a new tab.
- The Portfolio page is organized into Featured Case Studies, Professional Work, Graduate Program Projects, and Learning and Technical Writing Samples. The Earlier Experiments and Archive section has been removed to keep the page focused. Its compact section navigator and end-of-section Back to top links make all four groups directly navigable.
- The Featured case studies section is headed `Four case studies in practical, human-centered AI` and contains exactly four cards in this order: the Learning Intake Triage Workflow, AI Academy, Change Management and Governance in AI Automations, and AI Organizational Readiness Tool. The supporting line identifies the four areas as workflow optimization, enterprise enablement, governance and change, and organizational readiness. Each card opens a local case-study page; case studies with public evidence link onward to the sample or working tool. The intake page and card use the category label `Workflow optimization case study` and present a governed consultation architecture in direct, time-neutral design language; do not imply production use or expose proprietary configuration, prompts, data, or credentials. Its summary uses `Expected outcome` rather than claiming a production result.
- The homepage Portfolio card leads with these four case studies as the strongest entry point while the full Portfolio page retains the broader professional, graduate, learning, technical-writing, and archive collections.
- The AI Academy case study distinguishes shared and individual ownership and explicitly presents the work as evidence of collaboration. Michelle helped design the academy pyramid as part of a three-person AI team and jointly conducted the initial focus groups for vertical training. She independently owned the learning design and content for the foundational eLearning, excluding development, served as subject-matter expert and learning-flow designer for the remaining training layers, and partnered with developers who built the finished experiences. The page includes an accessible four-level HTML/CSS pyramid: mandatory foundation, instructor-led application, advanced AI capabilities, and role-specific application. The locally hosted draft AI ethics module is presented as one sample from the foundational eLearning Michelle designed, not as the full academy.
- The AI Organizational Readiness case study links to the live tool at `https://ready.innovate-elevate.ai` and explains that visitors who choose to share their results can begin a follow-up conversation with Michelle.
- The Ziplines case study links to the module sample, course page, and study guide and records Michelle's role as subject-matter expert, author, and on-camera instructor.
- When multiple public artifacts come from the same project or body of work, combine them into one card with multiple links rather than presenting repetitive cards. Current combined cards include UPS GBS standards, selected Oracle work from two separate projects, Agile learning resources, Panstoria digital-scrapbooking documentation, SAP materials, and repeated deliveries of the same speaking session.
- The Vinyl Curator Capstone card links to `https://capstone.curatevinyl.com`, records the 4.0 MSc in AI in Business result, and describes the verified React/TypeScript/Firebase/Firestore/Express stack.
- The Open Weights card highlights the interactive six-knob explainer at `https://msuzann3.github.io/explainers/0727/` and includes the related LinkedIn post as a secondary link.
- The Musical Grammar Rectifier card links to the internal `work/the-whom/` case study but intentionally opens it in a new tab.
- The AI Organizational Readiness Tool now lives at `https://ready.innovate-elevate.ai`.
- The Portfolio and Speaking pages include compact "On this page" menus below their hero sections, with anchored links to every major content section.
- The Speaking page is organized into Upcoming and Featured, Selected Speaking, Podcasts and Interviews, and Earlier Presentations. It leads with one Brain, Heart, and Courage card combining its ATD ICE 2026 and Training 2027 appearances, followed by the September 2026 TechLearn session. Related presentations are grouped as bodies of work when they share a topic or session lineage, including Muppet-inspired instructional design, positive change management, and design thinking for AI. The Earlier Presentations archive uses expandable era groups for 2020–2024, 2013–2018, and 2011–2012 so the full history remains available without presenting one overwhelming list. Retain gated appearances even when no public destination exists; label those cards `Gated event` and `No public recording` rather than calling the material proprietary.
- The Ziplines Education AI Essentials speaking entry uses the date range December 2024–January 2026.
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

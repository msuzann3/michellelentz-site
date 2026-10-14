# Michelle Lentz Personal Site

Active cross-Mac checkouts: `~/Developer/michelleslentz-site` on each Mac, outside iCloud Drive. Each Mac has independent Git metadata; GitHub carries committed changes between computers. The former iCloud folder at `~/Documents/_AI-Workspace/Codex/michelleslentz-site` is retained for reference and shared private materials, not site editing. Read `README.md` and `CHANGELOG.md` at the start of each task and update both when project context, workflow, or files materially change.

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
- `work/vinyl-curator/index.html` - Vinyl Curator capstone introduction: customer and owner experiences, front end, server, Firebase back end, and prototype limits
- `work/ai-decision-tools/index.html` - AI Suitability & Automation Prioritization case study and scoring methodology
- `work/ai-organizational-readiness/index.html` - AI Organizational Readiness Tool case study
- `work/ziplines-ai-automations/index.html` - Ziplines AI automations governance and change case study
- `work/the-whom/index.html` - Musical Grammar Rectifier n8n/GPT-4o workflow case study
- `work/mission-responsible-ai/index.html` - Intro and LMS implementation context for the branching Mission Possible: Responsible AI scenario experience with adaptive feedback and support
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

- Use `assets/michelle-avatar-emerald-outline.png`. The original illustration is restored and approved for the current review. Generated alternatives changed the face and were rejected; do not publish `assets/michelle-avatar-blue-eyes.png`.
- The outlined emerald avatar can sit on navy hero sections, but keep avatar usage polished and intentional.
- Shared avatar page heroes use a compact laptop-friendly title scale, reduced vertical padding, and a smaller responsive avatar so the next page section remains visible without sacrificing the blue header identity or navigation usability.
- The homepage hero uses a tighter title scale, reduced vertical padding and action spacing, and a smaller avatar treatment so the beginning of the next section is visible in a typical 14-inch laptop viewport.
- Phone layouts use mobile-only spacing below 680px: cards, card grids, tags, links, and section padding are more compact while body copy remains at an accessible 16px. Tablet, laptop, and desktop rendering is unchanged.

## Content Guidelines

- Preserve the static-site structure.
- Use existing CSS and card patterns before adding new styling.
- Keep descriptive copy inside Portfolio page cards at normal font weight. Card titles, metadata, link labels, and tags may retain their intentional emphasis.
- Featured case-study introductions should explain why the work was undertaken, not only what the solution does. Keep unnamed client work public-safe, distinguish designed work from shipped work, and identify research foundations without overstating validation.
- The shared Problem/My role/What I produced/Result summary bands on the four featured case studies use a light-blue treatment with dark text for readability; reserve midnight blue for heroes, closing calls to action, and footers.
- Keep only the four Featured case studies in a 2×2 grid above 680px; other Portfolio sections retain the standard three-column card grid. Case-study sample and architecture cards remain to the right of the introduction above 680px, then stack on phones.
- Header navigation order should remain: About, Portfolio, Speaking, Writing, LinkedIn, Subscribe to Flow & Function. The named subscription action is emphasized as the final navigation item and links to `https://flowandfunction.beehiiv.com`; the public Portfolio URL remains `/work/`.
- The homepage introduces `Flow & Function` with the approved tagline `AI in working order.` and a direct subscription action. Describe the newsletter as practical guidance for making AI useful at work across strategy, learning, governance, and change, published monthly with occasional bonus editions, combining practical workflows and deeper responsible-AI questions.
- `resume/index.html` is the About page. Visible page identity should say About, not Resume.
- The About hero includes Explore the portfolio as the first green primary action, then Connect on LinkedIn as the secondary action. The About page does not link to a downloadable resume. Its bottom review-links grid appears in this order: LinkedIn, Presentation Library, AI Case Studies & Portfolio, and Technical Writing & Editing Portfolio; the focused technical-writing portfolio opens in a new tab.
- External `http` and `https` links should include `target="_blank"` and `rel="noopener noreferrer"`.
- Keep the Plausible analytics snippet in the head of each main page.
- Keep the copyright line:
  `© All content copyright Michelle S. Lentz 1998-2026.`
- Footer on each main page should include:
  Michelle Lentz, Seattle, Washington, a page-specific sentence, and "Open to alternative time zones, travel, and relocation."
- Every main-page footer includes a discreet personal link labeled `Help Ringo Beat Cancer` pointing to Ringo's GoFundMe. Keep it separate from the site's professional navigation and primary calls to action.
- The homepage's dark Word Nerd section includes a separate `A personal note` callout about Ringo's cancer care, with a restrained divider and a link to the GoFundMe. Keep it distinct from the Word Nerd paragraph and secondary to the section's professional content.
- The AI Governance document belongs in Writing/archive context, not as a homepage feature.
- The focused Technical Writing & Editing portfolio lives at `https://michelleslentz.com/technical-writing/`. It leads with four curated bodies of work for contract prospects: engineering proposal editing, substantive article editing, UPS GBS documentation standards, and selected Oracle documentation. The Oracle card combines the Talent Management Essentials quick-start guide with Growth Potential and Learning Paths job aids from separate Oracle projects. A secondary archive leads with the combined Panstoria/Creative Memories digital-scrapbooking documentation and retains SAP and TekWorx formats. The Pre-Recording Checklist belongs with LCA virtual training on the main Portfolio. AI Governance remains on Writing rather than appearing in the Technical Writing portfolio. Portfolio PDFs are hosted in `technical-writing/samples/`; use these scrubbed copies rather than linking the dated Drive originals when available.
- The focused Technical Writer & Editor PDF remains hosted at `https://michelleslentz.com/resume/technical-writer-editor-resume.pdf` and is linked publicly only from the Technical Writing & Editing portfolio under the label `View Technical Writing Experience`. It is intentionally retained because it presents a specialized technical-writing history that differs substantially from LinkedIn. General site visitors are directed to LinkedIn rather than a downloadable resume.
- Michelle has completed her MSc in AI in Business at Arizona State University. The editable Word resume is maintained as a black-only ATS version; the public website PDF uses the site's branded visual treatment.
- The homepage uses `AI in Business` consistently for Michelle's ASU MSc and post-graduate certification and does not mention the 4.0.
- The About page retains the 4.0 in the MSc credential card, uses `AI in Business` consistently for both ASU credentials, removes the MBTI and Gallup insight-report cards, and uses a white Range section to separate it visually from the sky-blue Credentials section.
- The public resume PDF omits Michelle's phone number. The private ATS Word resume and application copy retain it for direct job applications.
- Private technical-writing application materials and the scripts used to prepare the resume and portfolio samples live at `~/Documents/_AI-Workspace/Codex/michelleslentz-site/private/technical-writing/` in the retained shared iCloud folder. That folder is intentionally ignored by Git because it contains personal contact information; do not publish or commit it. Use this shared project copy instead of the temporary `Documents/Codex/2026-08-03/i-ne/` task folder.
- The AI Governance document is hosted in this repository at `writing/from-risk-to-responsibility-ai-governance.pdf`; use `https://michelleslentz.com/writing/from-risk-to-responsibility-ai-governance.pdf` as its stable public and LinkedIn URL. Its PDF document properties identify the title as "AI Governance in Your Organization" and the author as Michelle Lentz.
- The Writing page is organized into Featured Writing; Flow & Function; Books, Guides, and Long-Form Work; Articles; and Personal Projects and Archive. Featured Writing contains exactly three cards in this order: `From Risk to Responsibility`, `Partner with AI for Instructional Design`, and `From Content Creators to Capability Architects`. Its compact section navigator and end-of-section Back to top links remain same-tab, while every destination card opens safely in a new tab.
- Mission Possible: Responsible AI is a self-directed portfolio sample Michelle created to demonstrate her current approach to scenario-based eLearning and responsible AI. Describe it precisely as a branching scenario experience with adaptive feedback and support based on learner decisions, not as broadly adaptive learning. The course remains a standalone ChatGPT Sites experience at `https://risk-responsibility-lab.msuzann3.chatgpt.site/`. Its Portfolio card opens the local `work/mission-responsible-ai/` introduction in a new tab; that page links to the source `From Risk to Responsibility` white paper and explains Michelle's design authorship, Codex-assisted implementation, performance-based support, branching consequences, required response remediation and justification, local progress persistence, and potential SCORM/xAPI/cmi5 instrumentation before linking to the course.
- The AI Automation Priority Matrix is a standalone public ChatGPT Sites tool at `https://ai-automation-priority-matrix.msuzann3.chatgpt.site/`. It begins after an organization has decided that AI is appropriate and helps compare which processes to automate first. Each process receives a score out of 100 using Value and Impact (40%), Readiness and Speed (30%), Adoption and Ownership (15%), and Responsible Use (15%). Critical ratings of 1 for privacy/security or errors/human judgment override the numerical recommendation: gated processes cannot be labeled Quick wins and are ranked after ungated work. Multiple processes are ranked by gate status and then total score, displayed on a value-versus-readiness matrix, and can be exported to CSV. Assessments remain in each visitor's browser through local storage. The methodology supports informed portfolio discussion rather than replacing human judgment. Its current positioning line is `Practical AI Strategy for Real Work`.
- The Mission introduction closes with three cards for Learning Design, LMS Delivery, and Course Continuity. LMS language uses `would` to describe what SCORM and xAPI/cmi5 implementations report. The continuity card explains that the course can be handed off as maintainable source with a SCORM-wrapped LMS package and a companion AI maintenance skill compatible with tools such as Codex or Claude Code. The reusable automation can support common changes, validation, rebuilding, packaging, and handoff documentation without locking the client into one AI environment. Keep this framed as a feasible client-delivery model, not as functionality already included in the current standalone public course.
- On the Mission introduction, the three closing card headings omit terminal punctuation; `Branch, Adapt, Verify` uses commas internally. The opening authorship copy states that Michelle used ChatGPT Codex to build the entire course without a separate course-authoring tool or outside developer, and the tags are AI governance, Branching scenarios, and Codex. The linked white-paper phrase inherits the surrounding lead sentence's complete font treatment; only its emerald color and underline distinguish it as a link.
- The aligned Mission Possible: Responsible AI Portfolio card and introduction were published through PR #12 on August 12, 2026, and verified live at `https://michelleslentz.com/work/` and `https://michelleslentz.com/work/mission-responsible-ai/`.
- The Portfolio has four sections: Featured Case Studies; AI Tools & Interactive Explainers; AI Learning, Governance & Change; and Learning Design & Performance Support. Graduate provenance is labeled on Vinyl Curator, Musical Grammar Rectifier, and Code Translator rather than used as a separate section. The Writing page remains unchanged.
- The Writing page Articles section leads with the Muppet instructional-design article, followed by one combined `Agile in Learning & Development` card linking the published article, detailed presentation, and white paper; `Two Different Ways to Prompt Your Favorite AI` appears last. `Action 2: Learning at Scale` is credited only on its own card as co-authored with Brandon Carson and Dr. Markus Bernhardt.
- AI Learning, Governance & Change presents Ziplines, From Risk to Responsibility (Governance & safety), Mission Possible, Brain/Heart/Courage, Positive Change Management, AI-Ready Recruiting, and the Conferences & Webinars card linking to Speaking and the public presentation library.
- AI Tools & Interactive Explainers presents Vinyl Curator, AI Orchestra, Open Weights, Recruiter Scam Check, Fact Checker Workflow, Musical Grammar Rectifier, Code Translator, and Structured Prompt Tool (Earlier prototype), in that order. The Fact Checker card includes Try, View results, and Build your own links and notes that results may take two minutes.
- Learning Design & Performance Support presents UPS standards, UPS MyHR/Workday training, Oracle performance support, Virtual Training Design & Production Support, and Technical Writing & Editing. Muppet Magic and the Lectora workbook have been removed from this page; GPT/archive cards remain absent.
- Featured Case Studies contains Learning Intake Triage Workflow, AI Academy, AI Suitability & Automation Prioritization, and AI Organizational Readiness, in a 2×2 desktop grid. The combined decision-tools page explains the live suitability checklist (eight equal-point core criteria, up to two custom criteria; fixed 0–3/4–6/7+ bands) and prioritization (12 weighted ratings, normalized score, 60-point category boundaries, critical-risk gates, ranking, and CSV export). Explicitly disclose that the suitability ethics criterion is not a veto and neither score is a validated prediction of ROI or success. Intake remains a workflow design with Expected outcome, without claims of production use.
- The Learning Intake Triage Workflow was designed around a standalone Copilot Studio agent made available in Teams, where employees already work. Keep the authoring environment and user-facing channel distinct in the implementation copy.
- The homepage Portfolio card describes workflow optimization, enterprise enablement, use-case evaluation and prioritization, and organizational readiness.
- The AI Academy case study distinguishes shared and individual ownership and explicitly presents the work as evidence of collaboration. Michelle helped design the academy pyramid as part of a three-person AI team and jointly conducted the initial focus groups for vertical training. She independently owned the learning design and content for the foundational eLearning, excluding development, served as subject-matter expert and learning-flow designer for the remaining training layers, and partnered with developers who built the finished experiences. The page includes an accessible four-level HTML/CSS pyramid: mandatory foundation, instructor-led application, advanced AI capabilities, and role-specific application. The locally hosted draft AI ethics module is presented as one sample from the foundational eLearning Michelle designed, not as the full academy.
- The AI Organizational Readiness case study links to the live tool at `https://ready.innovate-elevate.ai` and explains that visitors who choose to share their results can begin a follow-up conversation with Michelle.
- The Ziplines case study links to the module sample, course page, and study guide and records Michelle's role as subject-matter expert, author, and on-camera instructor.
- When multiple public artifacts come from the same project or body of work, combine them into one card with multiple links rather than presenting repetitive cards. Current combined cards include UPS GBS standards, selected Oracle work from two separate projects, Agile learning resources, Panstoria digital-scrapbooking documentation, SAP materials, and repeated deliveries of the same speaking session.
- The Vinyl Curator Capstone card links to the local `work/vinyl-curator/` introduction, which links onward to `https://capstone.curatevinyl.com/#/app`, uses the metadata label `Graduate project: Capstone`, and describes the verified React/TypeScript/Firebase/Firestore/Express stack.
- The Open Weights card highlights the interactive six-knob explainer at `https://msuzann3.github.io/explainers/0727/` and includes the related LinkedIn post as a secondary link.
- The Musical Grammar Rectifier card links to the internal `work/the-whom/` case study but intentionally opens it in a new tab.
- The AI Organizational Readiness Tool now lives at `https://ready.innovate-elevate.ai`.
- The Portfolio and Speaking pages include compact "On this page" menus below their hero sections, with anchored links to every major content section.
- The Speaking page is organized into Upcoming, Featured & Recent, Selected Speaking, Podcasts and Interviews, and Earlier Presentations. It leads with one Brain, Heart, and Courage card combining its ATD ICE 2026 and Training 2027 appearances, followed by the September 2026 TechLearn session. Related presentations are grouped as bodies of work when they share a topic or session lineage, including Muppet-inspired instructional design, positive change management, and design thinking for AI. The Earlier Presentations archive uses expandable era groups for 2020–2024, 2013–2018, and 2011–2012 so the full history remains available without presenting one overwhelming list. Retain gated appearances even when no public destination exists; label those cards `Gated event` and `No public recording` rather than calling the material proprietary.
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

Use an independent clone at `~/Developer/michelleslentz-site` on each Mac. Keep the checkout and `.git` outside cloud-synced storage. Agent Carter can be offline while Ginger works; exchange changes through GitHub.

1. Confirm the active local checkout; inspect status, branch, remote, and upstream and read README/CHANGELOG.
2. Fetch the remote. If the checkout is clean and has no divergent local commits, fast-forward to the intended branch. Preserve unfinished work and resolve divergence explicitly.
3. Make and verify edits; update the project documentation when appropriate.
4. Commit and push when authorized. Pushing `main` triggers GitHub Pages publication, so verify the deployed result for website releases.
5. Before changing Macs, identify unfinished or unpushed work. On the receiving Mac, fetch and confirm the intended commit before editing.

Private ignored materials remain in the shared iCloud folder `~/Documents/_AI-Workspace/Codex/michelleslentz-site/private/technical-writing/`. They are not part of a Git clone and must not be committed or published. Access that folder explicitly; do not link it into the published checkout.

Global Git workflow guidance is installed in `~/.codex/AGENTS.md` separately on each Mac. Existing chats may retain their old working directory; use explicit active paths and change the saved Codex project folder to the new local checkout for future chats.

## Codex Session Checklist

When Codex edits this site:

1. Confirm the active checkout is `~/Developer/michelleslentz-site`, outside iCloud.
2. Read `README.md` and `CHANGELOG.md` before making changes.
3. Inspect relevant files before editing.
4. Preserve the static structure and existing design patterns.
5. Verify local links/assets where practical.
6. Verify external links include `target="_blank"` and `rel="noopener noreferrer"`.
7. Update `README.md` and `CHANGELOG.md` for meaningful changes.
8. Tell Michelle exactly which files changed.

- The decision-tools case study uses plain-language explanations, four category summaries, and an expandable detailed scoring method. Explain that the overall score and both map scores are out of 100; 60/100 is the map dividing line. Define risk gates as checkpoints with concrete examples and outcomes. Keep narrative spacing and title sizing scoped to `.decision-case`.

- Vinyl Curator credits Google AI Studio, Codex, and Claude Code and Design. Explain the Discogs API as a catalog-import source using selected artist/album queries cached in Firestore, not random selection or a fresh external search for each customer. Avoid unverified current catalog counts. Use `.vinyl-case` styles for page-specific narrative spacing.

- Verified Capstone implementation: Vite build scripts and configuration, Tailwind Vite plugin/CSS import and interface classes, and Motion imports/animation components in App.tsx and VinylDisc.tsx support the front-end technology description.

- The Vinyl Curator landing page links directly to the prototype. Omit the outdated evaluation guide and introduction video from both opening and closing actions.

- Homepage Explore the portfolio is the primary hero action; LinkedIn is secondary. The Current focus copy links to concrete AI Academy, Ziplines, and decision-tool evidence. About includes Selected experience before Credentials, preserving ownership distinctions.
- Flow & Function is monthly with occasional bonus editions, per Issue 004. Avoid promising a workflow in every issue. Its Writing section leads with The Philosophy of AI, then Under the Hood 003 as a practical example. Retain the three existing Featured Writing cards.
- Portfolio closes with an email/LinkedIn contact invitation. Speaking separates the single Brain/Heart/Courage future appearance into Upcoming while preserving its earlier-delivery context; past and recurring work appear in Featured & Recent with audience/topic explanations.

- About identifies Michelle as an experienced facilitator and L&D leader, includes the designed Visa intake workflow in Selected experience, and records the user-confirmed MSc graduation with Distinction with a 4.0 GPA.

- Ziplines AI Essentials was a recurring five-week course offered from December 2024 through January 2026; retain the recurring duration alongside the date range.

## Home and About refresh (October 14, 2026)

Home leads with “I help organizations put AI to work.” and the illustrated avatar, followed by approach, newsletter, and communication background. Its purpose is to support job applications: the hero links to the Portfolio, the duplicate selected-work section is omitted, and consulting promotion is omitted from the homepage. Approach paragraphs have explicit spacing. About uses a professional story with 15+ years of learning and facilitation, compact credentials, and an outside-of-work paragraph identifying dachshunds George & Ringo. The repeated experience examples are omitted; the final review-links grid provides routes to the work. The curiosity sentence is the personal-section headline; the inactive book-and-wine newsletter is omitted. Its optimized black-shirt portrait sits in the white My Story section, capped at 190px wide on larger screens and 120px on phones. Home retains the illustrated avatar alongside its introduction. Avoid using “Clarity” as a positioning word because it can be confused with client Clarity Consultants. Other page heroes retain the illustrated avatar.

The About portrait uses a subtle CSS brightness adjustment (1.08), preserving the source photograph.

Refreshed Home/About spacing uses 64px section padding on larger screens and 44px on phones. The four About review links form a 2×2 grid above 680px and stack on phones. The personal headline is “Curiosity has always taken me in new directions.”

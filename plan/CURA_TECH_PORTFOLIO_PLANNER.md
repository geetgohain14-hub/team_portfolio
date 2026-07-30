# Cura Tech Media Team — Portfolio Site Build Plan

**Purpose of this document:** This is a build spec for Claude Code. It describes a premium,
pitch-ready web portfolio that presents our social media marketing & content production team
to Cura Tech (a construction company) — positioning the team as the partner that will build
Cura Tech's brand, generate leads, and drive revenue through content.

This replaces a static slide deck with a living site: it can be sent as a link, presented on
a laptop/TV in a pitch meeting, and later evolve into the team's real working dashboard
(content calendar, video library, etc).

**Inputs the user will supply (not yet in this file — insert where marked `[ADD: ...]`):**
1. Full team member bios + headshots/photos
2. Weekly content planner (calendar / schedule data)
3. Sample construction site videos (drone + ground footage)

Claude Code should build the full structure and UI now with realistic placeholder content
where marked, so the site is functional and good-looking immediately, then swap in real
assets once supplied.

---

## 1. Project Summary

- **Client-facing name of the offering:** Cura Tech Media / Content Team (working title —
  keep configurable in one place, e.g. a `siteConfig` object, so it's a one-line rename).
- **Audience:** Cura Tech's leadership/founders — this is an investor-pitch-style, not a
  public consumer site.
- **Primary goal of the site:** Persuade Cura Tech to bring this team on to run their entire
  social media + content + lead-generation engine.
- **Secondary goal:** Once approved, this same site becomes the operating hub — team roles,
  weekly planner, video library — so build it with that longevity in mind, not as throwaway
  pitch collateral.

## 2. Tech Stack Recommendation

Keep it simple, fast, and easy for Claude Code to iterate on:

- **Framework:** Single-page React app (Vite) or plain HTML/CSS/JS with a lightweight bundler
  — either is fine. If the user already has a preferred stack from other projects, use that;
  otherwise default to **Vite + React + Tailwind CSS**.
- **Routing:** Single scrolling page with anchor-linked sections + a sticky nav (this is a
  pitch flow, people should be able to scroll top-to-bottom like a deck, or jump via nav).
- **Video:** Native `<video>` tags for self-hosted MP4 samples, with lazy-loading/poster
  frames so the page stays fast. Support optional YouTube/Vimeo embed as a fallback.
- **Animations:** Subtle scroll-reveal (e.g. Framer Motion or CSS `IntersectionObserver`)
  — tasteful, not gimmicky. Motion should feel premium, not like a template.
- **Deployment target:** Static export (so it can be hosted anywhere or opened locally) —
  no backend required for v1. If the weekly planner needs to be *editable* by the team later,
  flag that as a v2 consideration (would need a small data store) rather than building it now.

## 3. Design System

- **Theme:** Premium dark base — near-black background (`#0B0B0D`–`#111114`), with **gold**
  as the primary accent (`#C9A227` / `#D4AF37` range) and off-white text (`#F5F5F3`). Use a
  secondary cool blue-grey (`#1A2233`) sparingly for section breaks/cards so it doesn't read
  as flat black-and-gold everywhere.
- **Typography:** A confident modern serif or geometric sans for headings (e.g. "Fraunces" or
  "Playfair Display" for gravitas, or "General Sans"/"Inter" for a cleaner startup feel — pick
  one direction and stay consistent), paired with a clean sans (Inter/Manrope) for body text.
- **Imagery mood:** Cinematic, high-contrast construction/drone photography. Dark overlays
  behind text on hero/section images so copy stays readable.
- **Motion/feel:** Confident, uncluttered, generous whitespace, large type on key statements.
  Think "modern architecture studio" more than "corporate agency deck."
- **Do not** use stock "generic marketing agency" gradients (purple/teal SaaS look) — that
  undercuts the construction-industry credibility angle.

## 4. Site Structure (Sections, in order)

Each section below includes: the section's job, the real copy to use, and any data/assets
that need to be wired up.

### Nav / Header
- Logo/wordmark (placeholder: "CURA TECH × [Team Name]" lockup — `[ADD: team/agency name if
  different from "Cura Tech Media Team"]`)
- Sticky nav with anchor links: Vision · Approach · Content · Funnel · Drone · Team ·
  Ideas · Benefits · Workflow · Influencers · Contact
- CTA button in nav: "Book a Walkthrough" or similar, scrolls to closing contact section

### Hero
- Full-bleed background: cinematic drone/construction shot (`[ADD: sample drone video —
  can be used here as a looping muted background video]`)
- Headline: **"We Don't Just Manage Social Media — We Build Your Brand and Bring You
  Customers."**
- Subhead: A complete content, storytelling, and lead-generation system built specifically
  for Cura Tech.
- Primary CTA: "See the Plan" (scrolls down) / Secondary CTA: "Meet the Team"

### 1. Introduction
- Short framing: construction is a trust-and-visuals business, but most construction
  companies have weak branding, no storytelling, and little to no real online presence.
- Position Cura Tech's opportunity: be the company that looks as good as its work actually is.
- Keep this section short — 2–3 sentences max, this is a hook, not a thesis.

### 2. Our Vision & Mission
- Vision statement: **Transform Cura Tech into a premium, trusted construction brand** —
  through storytelling, transparency, and high-quality visuals.
- Two-column or two-card layout: "Vision" / "Mission" so it reads like a real company
  strategy page, not a bullet list.

### 3. Our Unique Marketing Approach
Present as 5 pillar cards (icon + short label + one line):
1. Cinematic video content
2. Drone-based visuals
3. Real construction progress documentation
4. Educational, trust-building content
5. Customer-focused storytelling

### 4. Content Strategy
- Content pillars grid (6 cards): Drone + ground cinematic videos · Before vs After
  transformations · Site progress series (weekly updates) · Educational content
  (tips/mistakes/materials) · Client testimonials · Premium showcase videos
- **Posting cadence table** (build as a real component, not just text):

  | Format | Frequency |
  |---|---|
  | Reels | 3–4 per week |
  | Static Posts | 2–3 per week |
  | Stories | Daily |
  | Premium Showcase Videos | 1–2 per month |

  `[ADD: adjust cadence numbers once the real weekly planner is provided — this table should
  pull from the same data source as the Weekly Planner section below, not be hardcoded twice]`

### 5. Lead Generation System (Customer Funnel)
- Visual horizontal funnel/flow diagram (4 steps, arrows between them):
  **Social Media Content → DM / WhatsApp → Consultation → Conversion**
- Supporting points below the diagram:
  - Strong, consistent calls-to-action on every piece of content
  - Local targeting focus: **Assam / Guwahati** audience specifically
  - Paid ads strategy built on video content (not static image ads)
- Consider a small annotated callout on each funnel stage (what happens, what tool is used —
  e.g. WhatsApp Business, a booking link, etc.)

### 6. Role of Drone in Marketing
- Framing line: drone content signals scale, professionalism, and premium quality —
  it's the fastest way to make a construction company look trustworthy at a glance.
- Four drone shot types as cards: Site overview · Cinematic flythrough · Progress
  tracking · Final showcase
- Close with: how this footage gets reused across ads, client presentations, and
  conversion moments (i.e., it's not just for social — it's a sales asset).
- **Embed the sample construction site video(s) here** — `[ADD: sample drone/ground
  footage]`. This is the section where proof-of-concept footage does the most work,
  so make the video prominent (large player, autoplay-muted preview or click-to-play).

### 7. Team Structure & Roles
Build as a real team grid — photo, name, title, 1–2 line responsibility. Use this exact
roster and role copy (photos/expanded bios to be swapped in):

| Name | Title | Responsibility |
|---|---|---|
| Brian Marak | Head of Ideas & Content Planning | Creative direction, storytelling, captions, content planning |
| Avanish | Strategic Planner | Marketing strategy, ads, analytics, customer targeting |
| Aftab | Photographer, Videographer & Drone Operator | Aerial + ground footage, site progress, premium visuals |
| Geetartho Gohain | Video Editor, Graphic Designer & 3D Specialist | Cinematic video editing, motion graphics, 3D house previews |
| Vivek | Editing & Software Specialist | Editing support, AI tooling, fast content turnaround |

`[ADD: headshots, and any longer-form bios/quotes per person — leave a `bio` field per
team member in the data structure so it's easy to drop in later]`

### 8. Unique Ideas & Competitive Advantage
Card grid, 5 items:
- Drone + 3D house preview videos
- "Dream Home Journey" series
- Live site walkthroughs
- Influencer collaborations
- "Ask a Builder" educational series

### 9. Benefits to Cura Tech
Present as outcome stats/cards rather than a plain bullet list — this is the "why this
matters commercially" section:
- Increased customer inquiries (leads)
- Strong brand image
- Higher trust and credibility
- Better conversion rate
- Market dominance in the local region

*(If real numbers/estimates ever become available, this section is the natural home for
a simple stat/metric display — leave the layout flexible enough to add numbers later.)*

### 10. Workflow System
Horizontal step flow (5 steps): **Planning → Shooting → Editing → Posting → Lead
Conversion.** Style this consistently with the Section 5 funnel diagram (reuse the same
component) so the site feels systemized, not improvised.

### 11. Influencer Marketing Strategy
- Framing: local influencer partnerships build trust faster than ads alone, because
  people trust people more than brands.
- Selection criteria (2 cards): Audience relevance (home/lifestyle/investment interest) ·
  Engagement rate over raw follower count
- Collaboration types (grid of 4): Site visits · "Building my dream home" series ·
  Honest reviews & walkthroughs · Before/after reactions
- Outcome callouts: higher trust · wider local reach · faster brand recognition

### 12. Influencer Video Briefing System
Present as a 3-phase process (Before / During / After) — this is a good candidate for a
timeline or tabbed component:
- **Before shooting:** concept + storyline provided, brand tone defined (premium,
  trustworthy, professional), key talking points supplied (construction quality,
  transparency, materials/finishing, site experience)
- **During shooting:** Brian + Aftab direct camera angles (drone + ground), shot list,
  and influencer performance (how they walk, talk, react)
- **After shooting:** Geetartho + Vivek handle editing — cinematic cuts, subtitles,
  branding, music

### 13. Video Direction & Script Strategy
- Framing: every video is planned, never random.
- Structure breakdown (3 parts):
  - **Hook (first 3 seconds)** — example line: *"This is how your dream home actually
    gets built 👇"*
  - **Middle** — site walkthrough, influencer reaction, key highlights
  - **CTA close** — *"Contact Cura Tech for your dream home"*
- Closing line: every video follows a storytelling format built on emotion, trust, and
  quality.

### 14. Content Control & Quality System
Short, confident section — 4 short assurance statements, not paragraphs:
- No random content
- Every video is planned
- Brand consistency across all platforms
- High-quality visuals (drone + cinematic editing)

### 15. Influencer + Brand Collaboration Advantage
Simple 3-part equation, presented visually (e.g. three cards connected by "+" and "="):
**Influencer brings audience + Cura Tech provides value = Team converts attention into
customers.** Result row below: more reach · more trust · more inquiries · more
conversions.

### 16. Weekly Planner (NEW — data section, not in original pitch deck)
- This is where the actual weekly content calendar lives once supplied.
- Build as a simple weekly grid/table component (Mon–Sun columns, content type + platform
  per cell), sourced from a single data file (e.g. `data/weeklyPlanner.json`) so it's easy
  to update without touching layout code.
- `[ADD: the real weekly planner content here]` — until supplied, seed with a realistic
  placeholder week using the cadence from Section 4 so the section isn't empty.

### Closing / Final Impact Statement
- Full-width, high-contrast closing section, large type, centered:

  **"We don't just manage social media — we build your brand and bring you customers
  through strategy, storytelling, and premium content."**

- CTA button: "Start the Partnership" / "Contact the Team" → links to WhatsApp/email
  (`[ADD: real contact method/link]`)

---

## 5. Data Structure Recommendations

Keep content data separate from layout components so the user can update copy/team/videos
without editing UI code:

```
/src
  /data
    teamMembers.json      // name, title, responsibility, bio, photoUrl
    contentPillars.json
    weeklyPlanner.json     // [ADD: real weekly planner data]
    funnelSteps.json
    workflowSteps.json
    droneShotTypes.json
    influencerCollabTypes.json
  /assets
    /video
      sample-drone-01.mp4   // [ADD: sample videos here]
      sample-ground-01.mp4
    /photos
      team/                 // [ADD: headshots here]
  /components
    Nav.jsx
    Hero.jsx
    SectionIntro.jsx
    VisionMission.jsx
    ApproachPillars.jsx
    ContentStrategy.jsx
    PostingCadenceTable.jsx
    FunnelDiagram.jsx        // reused for Section 5 and Section 10
    DroneSection.jsx
    TeamGrid.jsx
    IdeasGrid.jsx
    BenefitsGrid.jsx
    InfluencerStrategy.jsx
    InfluencerBriefingTimeline.jsx
    VideoScriptStructure.jsx
    QualitySystem.jsx
    CollabAdvantage.jsx
    WeeklyPlanner.jsx
    ClosingStatement.jsx
```

## 6. Build Order (recommended phases for Claude Code)

1. **Scaffold** the project (Vite/React/Tailwind), set up the design tokens (colors, fonts)
   from Section 3.
2. **Build layout shell**: Nav + Hero + Closing statement first, so the overall look/feel
   is locked before filling in the 16 content sections.
3. **Build each content section** in order (Sections 1–16 above), using placeholder
   copy exactly as written in this document — it's ready to ship as-is.
4. **Wire up data files** for team, weekly planner, and video assets as separate JSON/
   asset files (per Section 5) so real content can be dropped in without touching
   components.
5. **Insert real assets** once supplied: team photos/bios, weekly planner data, sample
   videos — replace placeholders at the marked `[ADD: ...]` points.
6. **Polish pass**: scroll animations, responsive check (mobile especially — this will
   likely be shared as a link on phones), performance check on video loading.
7. **Export/deploy**: static build, verify it opens cleanly for the pitch meeting
   (test on the actual device/browser it'll be presented on).

## 7. Open Items / Things to Confirm With the User Before or During Build

- Final name/branding for the media team itself (is it a formal agency name, or just
  "Cura Tech's in-house content team"?) — affects logo/wordmark treatment.
- Contact method for the closing CTA (WhatsApp number, email, booking link?).
- Whether the Weekly Planner section should be view-only (static site) or eventually
  editable by the team (would need a lightweight backend/data store — flag as v2).
- Video formats/sizes for the sample construction footage, so they can be compressed/
  optimized appropriately for web without losing the cinematic quality that's the whole
  point of this pitch.

---

*This document is intended to be handed directly to Claude Code as the working spec.
All copy under each numbered section is final pitch language and can be used verbatim;
only the `[ADD: ...]` items require real assets from the user before the site is complete.*

export interface ContentPillar {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  format: string;
  iconName: string;
}

export const contentPillars: ContentPillar[] = [
  {
    id: "drone-ground",
    title: "Drone + Ground Cinematic Videos",
    category: "Visual Excellence",
    description: "Sweeping 4K aerial drone flythroughs paired with detailed ground close-ups of foundations, steelwork, and interior finishes.",
    impact: "Establishes luxury positioning & immediate scale credibility",
    format: "Reels & YouTube Shorts",
    iconName: "Video"
  },
  {
    id: "before-after",
    title: "Before vs After Transformations",
    category: "Proof of Quality",
    description: "High-contrast visual comparisons showcasing empty plots transformed into finished dream homes and commercial spaces.",
    impact: "Stops the social media scroll with immediate visual satisfaction",
    format: "Carousel Posts & Reels",
    iconName: "Layers"
  },
  {
    id: "site-progress",
    title: "Site Progress Series",
    category: "Transparency & Trust",
    description: "Weekly updates following active construction sites, documenting milestones, inspection approvals, and team precision.",
    impact: "Builds buyer confidence & demonstrates active project velocity",
    format: "Weekly Episodic Reels & Stories",
    iconName: "TrendingUp"
  },
  {
    id: "educational",
    title: "Educational & Trust Building",
    category: "Expert Authority",
    description: "Short guides demystifying construction costs, soil testing, cement quality, 2026 design trends, and avoiding builder traps.",
    impact: "Positions Cura Tech as the transparent, expert authority",
    format: "Talking Head Reels & Infographics",
    iconName: "BookOpen"
  },
  {
    id: "testimonials",
    title: "Client Experience & Key Handovers",
    category: "Social Proof",
    description: "Emotional, authentic interviews with happy homeowners receiving their keys, sharing their journey with Cura Tech.",
    impact: "Provides emotional resonance and direct peer recommendation",
    format: "Showcase Videos & Carousel Reviews",
    iconName: "Heart"
  },
  {
    id: "flagship-showcase",
    title: "Premium Flagship Showcase",
    category: "Brand Flagship",
    description: "Architectural film-style tours of completed luxury residences featuring voiceover narration, 3D overlays, and ambient audio.",
    impact: "Anchors the brand as Assam's premier construction standard",
    format: "Monthly Cinematic Feature (2-3 min)",
    iconName: "Award"
  }
];

export interface CadenceItem {
  format: string;
  frequency: string;
  description: string;
  targetPlatform: string;
  badgeColor: string;
}

export const postingCadence: CadenceItem[] = [
  {
    format: "Reels & Short Video",
    frequency: "4–5 per week",
    description: "High-impact short-form videos optimized for Instagram Reels, Facebook Watch & YouTube Shorts algorithm reach.",
    targetPlatform: "Instagram / Facebook / Shorts",
    badgeColor: "bg-orange-600 text-white"
  },
  {
    format: "Static & Carousel Posts",
    frequency: "3–4 per week",
    description: "High-resolution photo carousels, architectural specs, floor plans, and educational infographic slideshows.",
    targetPlatform: "Instagram Feed / LinkedIn",
    badgeColor: "bg-slate-900 text-white"
  },
  {
    format: "Stories & Behind-the-Scenes",
    frequency: "Daily (Ongoing)",
    description: "Real-time site updates, quick worker highlights, polls, Q&A stickers, and daily progress teasers.",
    targetPlatform: "Instagram / Facebook Stories",
    badgeColor: "bg-amber-700 text-white"
  },
  {
    format: "Premium Showcase Videos",
    frequency: "1–2 per month",
    description: "Fully narrated, 4K film-grade video tours of completed projects for high-value client presentations and ads.",
    targetPlatform: "YouTube / Website / WhatsApp Pitch",
    badgeColor: "bg-amber-900 text-white"
  }
];

export interface FunnelStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  toolUsed: string;
  keyAction: string;
}

export const leadFunnel: FunnelStep[] = [
  {
    step: 1,
    title: "Social Media Content",
    subtitle: "High-Visual Reach",
    description: "Cinematic drone reels, site transformations, and educational posts capture target homeowner attention across Guwahati & Assam.",
    toolUsed: "Instagram Reels / Facebook Ads / YouTube",
    keyAction: "Hook & Brand Awareness"
  },
  {
    step: 2,
    title: "DM / WhatsApp Business",
    subtitle: "Instant Inquiry",
    description: "Clear calls-to-action prompt interested viewers to tap direct message links for instant project inquiries and brochures.",
    toolUsed: "WhatsApp Business API / Instagram DMs",
    keyAction: "Automated Instant Response"
  },
  {
    step: 3,
    title: "Site Consultation",
    subtitle: "Qualified Meeting",
    description: "Prospects are invited to a live site walkthrough or architectural consultation with Cura Tech's engineering team.",
    toolUsed: "Calendar Booking / Phone Consultation",
    keyAction: "Trust & Scope Definition"
  },
  {
    step: 4,
    title: "Client Conversion",
    subtitle: "Signed Contract",
    description: "High-trust visual presentation and clear scope of work convert inquiries into signed residential or commercial build contracts.",
    toolUsed: "Interactive Proposal Deck & Contract",
    keyAction: "Revenue Generation"
  }
];

export interface DroneShotType {
  title: string;
  description: string;
  commercialValue: string;
  iconName: string;
}

export const droneShotTypes: DroneShotType[] = [
  {
    title: "Site Overview Shots",
    description: "High-altitude 360-degree aerial captures displaying property boundaries, plot location, and surrounding connectivity.",
    commercialValue: "Signals massive scale and institutional capability to prospective clients.",
    iconName: "Globe"
  },
  {
    title: "Cinematic Flythroughs",
    description: "Low-altitude smooth gimbal passes gliding over rooflines, open courtyards, and through unfinished room frames.",
    commercialValue: "Delivers a luxury architectural film aesthetic that competitors cannot match.",
    iconName: "Eye"
  },
  {
    title: "Progress Tracking Angles",
    description: "Fixed-GPS aerial coordinates photographed weekly to track foundation pour, slab construction, and exterior finishing.",
    commercialValue: "Provides objective engineering proof for remote or NRI clients.",
    iconName: "CheckSquare"
  },
  {
    title: "Final Showcase Reveals",
    description: "Golden-hour sunset flybys revealing completed villas and commercial complexes in full operational glory.",
    commercialValue: "Serves as the primary anchor video for high-converting video ad campaigns.",
    iconName: "Star"
  }
];

export interface CampaignIdea {
  title: string;
  concept: string;
  execution: string;
  impact: string;
}

export const campaignIdeas: CampaignIdea[] = [
  {
    title: "Drone + 3D House Preview Videos",
    concept: "Seamlessly transition live aerial footage of an empty plot into a 3D architectural render of the finished home.",
    execution: "Aftab captures plot drone footage -> Geetartha overlays 3D model render in After Effects.",
    impact: "Enables buyers to see their future home on their exact land before breaking ground."
  },
  {
    title: "“Dream Home Journey” Series",
    concept: "A serialized video documentary following a real family from plot purchase to final key handover.",
    execution: "Monthly episodic videos documenting client excitement, material choices, and site milestones.",
    impact: "Creates deep emotional connection and relatable social proof."
  },
  {
    title: "Live Site Walkthroughs",
    concept: "Real-time unedited video tours answering viewer questions live from an active construction site.",
    execution: "Brian & Avanish host live Q&A sessions on Instagram Live showcasing steel quality and concrete tests.",
    impact: "Unmatched transparency that eliminates builder skepticism."
  },
  {
    title: "Local Influencer Collaborations",
    concept: "Partnering with respected Guwahati lifestyle, real estate, and business influencers for site visits.",
    execution: "Influencers tour Cura Tech sites and document their genuine reactions to build quality.",
    impact: "Instantly borrows established local trust and expands regional reach."
  },
  {
    title: "“Ask a Builder” Educational Series",
    concept: "Bite-sized Q&A reels addressing hard questions: 'How to check cement quality?', 'Budgeting mistakes to avoid'.",
    execution: "Brian interviews Cura Tech engineers on site with snappy graphics by Vivek.",
    impact: "Positions Cura Tech as the most honest, knowledgeable builder in Assam."
  }
];

export interface CommercialBenefit {
  metric: string;
  label: string;
  description: string;
  detail: string;
}

export const commercialBenefits: CommercialBenefit[] = [
  {
    metric: "3x - 5x",
    label: "Increased Customer Inquiries",
    description: "Consistent video content creates an always-on lead engine generating qualified calls.",
    detail: "Replaces cold calls with inbound WhatsApp inquiries."
  },
  {
    metric: "Top 1%",
    label: "Premium Brand Perception",
    description: "High-production drone visuals position Cura Tech as the market benchmark in Northeast India.",
    detail: "Commands premium pricing and higher margin projects."
  },
  {
    metric: "85%+",
    label: "Client Trust & Transparency",
    description: "Real progress documentation eliminates buyer fear of construction delays and hidden flaws.",
    detail: "Shortens decision cycles from months to days."
  },
  {
    metric: "40%+",
    label: "Higher Consultation Conversion",
    description: "Clients who watch site videos enter sales meetings already convinced of Cura Tech's quality.",
    detail: "Higher contract sign rates per site meeting."
  },
  {
    metric: "Assam #1",
    label: "Regional Market Dominance",
    description: "Captures the digital mindshare of Guwahati and Assam's growing homebuilding demographic.",
    detail: "Outpaces competitors relying on traditional print ads."
  }
];

export interface WorkflowStep {
  stepNumber: number;
  name: string;
  description: string;
  owner: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    stepNumber: 1,
    name: "Planning & Strategy",
    description: "Weekly content calendar finalized, video scripts prepared, and site shoot schedules coordinated.",
    owner: "Brian & Avanish"
  },
  {
    stepNumber: 2,
    name: "On-Ground & Aerial Shooting",
    description: "Site visits conducted with professional camera gear, wireless audio, and 4K drone passes.",
    owner: "Aftab & Brian"
  },
  {
    stepNumber: 3,
    name: "Post-Production & Polish",
    description: "Cinematic editing, color grading, motion graphic overlays, custom subtitles, and 3D renders.",
    owner: "Geetartha & Vivek"
  },
  {
    stepNumber: 4,
    name: "Publishing & Ad Targeting",
    description: "Optimized caption writing, hashtag strategy, multi-platform posting, and localized meta ad campaigns.",
    owner: "Brian & Avanish"
  },
  {
    stepNumber: 5,
    name: "Lead Capture & Conversion",
    description: "Managing inbound DMs, WhatsApp inquiries, performance analytics review, and client handover.",
    owner: "Avanish & Cura Tech Sales"
  }
];

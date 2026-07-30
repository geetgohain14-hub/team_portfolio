export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortResponsibility: string;
  photoUrl: string;
  phone: string;
  email: string;
  instagram?: string;
  location: string;
  education: string;
  languages: string[];
  keyStats: string[];
  skills: string[];
  experienceHighlights: string[];
  bio: string;
  curatechValue: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "brian-marak",
    name: "Brian Tengsrang R Marak",
    role: "Team Lead · Social Media Manager",
    shortResponsibility: "Creative direction, storytelling, captions, content planning, on-ground capture",
    photoUrl: "/images/team/brian.jpg",
    phone: "9864975105",
    email: "Brianmarakstart@gmail.com",
    instagram: "@Brian_r_marak",
    location: "Assam, India",
    education: "B.Com (5th Semester), Gauhati Commerce College",
    languages: ["English", "Hindi", "Assamese"],
    keyStats: [
      "5M+ (5,067,479) Organic Views",
      "1.18M+ 3-Second Video Views",
      "307+ Days Cumulative Watch Time",
      "100K+ Views per Reel Average Peak"
    ],
    skills: [
      "Social Media Management",
      "Video Editing",
      "Reels Production",
      "Audience Engagement",
      "Campaign Communications",
      "Storytelling & Scriptwriting"
    ],
    experienceHighlights: [
      "1+ year running digital campaigns for Indian National Congress (INC) & National People's Party (NPP)",
      "Managed full-time Facebook & Instagram presence for political figures (Jonson Sangma)",
      "Co-founded WxM Club student dropshipping venture generating 500K+ views in 2 months",
      "Hands-on experience at Labdig Innovations & Systems Pvt. Ltd."
    ],
    bio: "Brian is a results-driven creative lead with a track record of turning raw video into viral reach. Having generated over 5 million organic views across political and commercial campaigns, he brings audience-first storytelling that turns site construction into high-converting video content.",
    curatechValue: "Captures site photos and videos with a viral-tested eye, crafting captions and reels that build instant brand trust among prospective homeowners in Assam."
  },
  {
    id: "avanish-daolagupu",
    name: "Avanish Kumar Daolagupu",
    role: "Strategic Planner & Marketing Coordinator",
    shortResponsibility: "Marketing analysis & strategy, analytics, customer targeting, campaign coordination",
    photoUrl: "/images/team/avanish.jpg",
    phone: "+91-8638247120",
    email: "avanishkdaolagupu@gmail.com",
    location: "Guwahati, Assam",
    education: "B.Com in Marketing Management (5th Semester), Gauhati Commerce College",
    languages: ["Dimasa (Native)", "English", "Assamese", "Hindi", "Bengali"],
    keyStats: [
      "500K+ Views in 2 Months (WxM Club)",
      "BPN Motors TATA Dealership Intern",
      "Multilingual Reach Across Assam",
      "Structured CRM & Retail Analytics"
    ],
    skills: [
      "Market Research & Consumer Targeting",
      "Social Media Marketing & Ad Strategy",
      "Canva & Visual Graphics",
      "CRM & Retail Management",
      "Digital Campaign Optimization",
      "Multilingual Content Localization"
    ],
    experienceHighlights: [
      "Marketing Intern at BPN Motors Pvt Ltd. (TATA Motors commercial dealership in Guwahati)",
      "Co-Founder & Marketing Head at WxM Club dropshipping venture",
      "Academic research projects on Retail E-Commerce Transformation, CRM, and Digital Advertising",
      "Educated at Delhi Public School Guwahati & Gauhati Commerce College"
    ],
    bio: "Avanish grounds content in rigorous market research and local demographic understanding. Combining commercial dealership marketing experience at TATA Motors with e-commerce strategy, he ensures every piece of content maps to client lead generation.",
    curatechValue: "Structures local ad campaigns targeting homebuyers in Guwahati and Assam, ensuring content reaches high-intent prospects and converts inquiries into booked site visits."
  },
  {
    id: "aftab-latif",
    name: "Aftab Latif",
    role: "Photographer, Videographer & Drone Operator",
    shortResponsibility: "Aerial + ground footage, site progress documentation, premium visual production",
    photoUrl: "/images/team/aftab.jpg",
    phone: "+91 91813 36375",
    email: "latifaftab879@gmail.com",
    location: "Assam, India",
    education: "B.Com (4th Semester), Royal Global University, Assam",
    languages: ["Assamese", "Hindi", "English", "Garo"],
    keyStats: [
      "2.5M+ (2,505,567) Facebook Views",
      "113% Audience Growth Rate",
      "162+ Days Cumulative Watch Time",
      "10K+ Follower Page Scaling"
    ],
    skills: [
      "Aerial Drone Videography",
      "Ground DSLR Photography & Video",
      "Cinematic Lighting & Composition",
      "Site Progress Documentation",
      "On-Ground Event Coverage",
      "Canva & Clipchamp Production"
    ],
    experienceHighlights: [
      "Social Media Manager & Content Creator for NPP Kamrup District (1+ year)",
      "Produced media content for Meghalaya Chief Minister's office and public communications",
      "Grew official Facebook page to 10,000+ followers with 572K+ 3-second views",
      "Independent owner of professional camera gear and production equipment setup"
    ],
    bio: "Aftab is an equipped visual specialist with a keen eye for scale and architectural beauty. Equipped with high-end camera gear and drone production capability, he produces crisp site visuals that make ongoing construction look clean, impressive, and trustworthy.",
    curatechValue: "Operates drone flythroughs and ground cameras at project locations, giving Cura Tech high-definition assets for organic reels, client pitches, and targeted video ads."
  },
  {
    id: "geetartha-gohain",
    name: "Geetartha Borpatra Gohain",
    role: "AI Automation and Growth Specialist",
    shortResponsibility: "Cinematic video ideation, Web Developement, AI workflows & content generation, Lead Capture Workflow",
    photoUrl: "/images/team/geetartha.jpg",
    phone: "+91 6002425512",
    email: "geetartha1404@gmail.com",
    location: "Guwahati, Assam",
    education: "B.Sc, Assam Down Town University | Radiography Background",
    languages: ["English", "Assamese", "Hindi"],
    keyStats: [
      "Built Reevalve AI Resume Analyzer",
      "Integrated 3,000–4,000 Emails/Day AWS SES",
      "Created 4 Custom GPT Marketing Tools",
      "Google Cloud & Meta Certified"
    ],
    skills: [
      "Cinematic Video Overseer & Post-Production",
      "AI Workflow Automation & Custom GPTs",
      "Full-Stack Web Development (Next.js, Python)",
      "AWS SES/SNS Email Marketing Systems",
      "Web Scraping & Structured Analytics"
    ],
    experienceHighlights: [
      "AI Automation & Digital Marketing Intern at Emozi Technologies",
      "Built internal admin panel doubling client-handling capacity for healthtech pipeline",
      "Creator of Reevalve (live AI product demo) & personal portfolio engine",
      "Certified in Google Cloud Generative AI, Meta Social Media Marketing, and Python"
    ],
    bio: "Geetartha fuses high-end visual design with modern AI tools and software engineering. From 3D architectural render previews to automated client communication, he builds the tech infrastructure that multiplies content efficiency.",
    curatechValue: "Blends real drone footage with 3D house previews and builds automated lead management tools so Cura Tech captures and tracks client inquiries with zero leakage."
  },
  {
    id: "vivek-dutta",
    name: "Vivek Dutta",
    role: "Editing & Software Specialist",
    shortResponsibility: "Editing support, post-production polish, AI tooling, fast content turnaround",
    photoUrl: "/images/team/vivek.jpg",
    phone: "+91-9864975105 (Via Team Lead)",
    email: "vivekdutta.media@gmail.com",
    location: "Guwahati, Assam",
    education: "B.Com / Technical Specialist",
    languages: ["English", "Assamese", "Hindi"],
    keyStats: [
      "Co-Developer WxM Dropshipping Platform",
      "Adobe Premiere & After Effects Specialist",
      "Rapid 24-Hour Reel Editing Pipeline",
      "Multi-Language Software Support (Python, C++)"
    ],
    skills: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Adobe Photoshop & Lightroom",
      "Color Grading & Audio Mixing",
      "Python, C, C++, C# Programming",
      "Graphic Banner Design"
    ],
    experienceHighlights: [
      "Dedicated post-production specialist across commercial and dropshipping projects",
      "Co-built WxM Club dropshipping e-commerce platform with Avanish and Brian",
      "Expertise in color grading raw construction site footage into cinematic social reels",
      "Maintains software pipelines for batch graphic generation and fast turnaround"
    ],
    bio: "Vivek is the technical engine behind video color grading, motion graphics, and post-production polish. With deep expertise across Adobe Creative Suite and programming languages, he ensures every visual asset is crisp, branded, and delivered on schedule.",
    curatechValue: "Transforms raw ground and drone footage into polished 4K reels, complete with dynamic subtitles, sound design, and brand overlays within 24 hours of site capture."
  }
];

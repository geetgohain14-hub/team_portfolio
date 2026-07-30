export interface ScheduledItem {
  id: string;
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  timeSlot: string;
  contentType: "Reel" | "Static Post" | "Story" | "Premium Showcase" | "Live Stream";
  title: string;
  topic: string;
  platform: "Instagram" | "Facebook" | "YouTube" | "WhatsApp" | "All Platforms";
  assignee: string;
  status: "Scheduled" | "In Production" | "Published" | "Planning";
  targetAudience: string;
}

export const weeklyPlanner: ScheduledItem[] = [
  {
    id: "mon-01",
    day: "Monday",
    timeSlot: "09:00 AM",
    contentType: "Reel",
    title: "Monday Motivation: Steel Quality Breakdown",
    topic: "Educational reel testing TMT steel bar grade on site with engineer explanation.",
    platform: "Instagram",
    assignee: "Brian & Aftab",
    status: "Published",
    targetAudience: "Guwahati Homebuyers & Commercial Investors"
  },
  {
    id: "mon-02",
    day: "Monday",
    timeSlot: "02:00 PM",
    contentType: "Story",
    title: "Live Concrete Pour Update",
    topic: "3-part story sequence capturing slab pouring at VIP Road Villa site.",
    platform: "Instagram",
    assignee: "Aftab",
    status: "Published",
    targetAudience: "Active Followers & Prospects"
  },
  {
    id: "tue-01",
    day: "Tuesday",
    timeSlot: "11:30 AM",
    contentType: "Static Post",
    title: "Architectural Floor Plan Showcase",
    topic: "Carousel post highlighting 3D layout vs. actual progress photos.",
    platform: "All Platforms",
    assignee: "Geetartha & Avanish",
    status: "Scheduled",
    targetAudience: "Modern Home Design Seekers"
  },
  {
    id: "wed-01",
    day: "Wednesday",
    timeSlot: "05:00 PM",
    contentType: "Reel",
    title: "Before vs After Plot Transformation",
    topic: "Cinematic drone transition from raw land plot to 60% completed structural frame.",
    platform: "Instagram",
    assignee: "Aftab & Vivek",
    status: "Scheduled",
    targetAudience: "Landowners & Property Buyers"
  },
  {
    id: "thu-01",
    day: "Thursday",
    timeSlot: "10:00 AM",
    contentType: "Story",
    title: "Ask a Builder Q&A Sticker",
    topic: "Interactive Q&A: 'What is the cost per sq ft for villa construction in 2026?'",
    platform: "Instagram",
    assignee: "Avanish & Brian",
    status: "Planning",
    targetAudience: "High-Intent Inquirers"
  },
  {
    id: "fri-01",
    day: "Friday",
    timeSlot: "06:30 PM",
    contentType: "Reel",
    title: "Dream Home Journey Ep. 3: Roofing Installation",
    topic: "Episodic reel following Mr. Barua's residence progress in Six Mile, Guwahati.",
    platform: "All Platforms",
    assignee: "Brian & Vivek",
    status: "In Production",
    targetAudience: "Families Planning to Build"
  },
  {
    id: "sat-01",
    day: "Saturday",
    timeSlot: "12:00 PM",
    contentType: "Premium Showcase",
    title: "Flagship Reveal: Luxury Duplex in Zoo Road",
    topic: "Full 4K architectural film feature with voiceover narration and client interview.",
    platform: "YouTube",
    assignee: "Entire Team",
    status: "In Production",
    targetAudience: "Premium Villa Clients & Investors"
  },
  {
    id: "sun-01",
    day: "Sunday",
    timeSlot: "04:00 PM",
    contentType: "Story",
    title: "Weekly Site Summary & Call Booking",
    topic: "Story recap of week's milestones with direct swipe-up link to WhatsApp consultation.",
    platform: "WhatsApp",
    assignee: "Avanish",
    status: "Scheduled",
    targetAudience: "Warm Leads & Pending Consultations"
  }
];

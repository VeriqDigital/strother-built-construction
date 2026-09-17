// Mockup proof confirmed in the client's September 16, 2026 brief.
// Update rating and count together when new Google evidence is supplied.
// Source notes and exact testimonial excerpts: docs/PROOF.md.
export const googleReviews = {
  rating: "4.9",
  count: 28,
  confirmedOn: "2026-09-16",
  // Verified to resolve to Strother's Google listing, including its review panel.
  url: "https://www.google.com/maps/search/?api=1&query=Strother+Built+Construction+Des+Moines+Iowa",
} as const;

export const recognition = {
  organization: "CommunityVotes Ankeny",
  year: 2025,
  awards: [
    { level: "Gold Winner", category: "Kitchen Remodeling" },
    { level: "Gold Winner", category: "Bathroom Remodeling" },
    { level: "Top Pick", category: "Home Renovation" },
    { level: "Top Pick", category: "General Contractor" },
  ],
} as const;

export const testimonials = {
  featured: {
    id: "rich",
    quote:
      "We hired Josh for remodeling our living room he did an amazing job.",
    name: "Rich",
    context: "Living room remodel",
  },
  supporting: {
    id: "shelly",
    quote: "Great communication, no surprises and got the job done!",
    name: "Shelly",
    context: "Customer testimonial",
  },
} as const;

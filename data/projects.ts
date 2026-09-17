// Photographs from Strother's published project galleries; see docs/PHOTOGRAPHY.md.
// Labels describe visible subjects, not unverified project scopes or locations.
export const projects = [
  {
    src: "/strother-blue-kitchen.jpg",
    alt: "Blue kitchen cabinetry, a white island, brass faucet, and pendant lights above wood flooring",
    title: "A place to come together",
    category: "Kitchen",
    className: "project-wide",
  },
  {
    src: "/strother-glass-tile-shower.jpg",
    alt: "Glass-enclosed shower with white subway tile, dark trim, and a recessed tile niche",
    title: "Character in the details",
    category: "Bathroom",
    className: "project-portrait",
  },
  {
    src: "/strother-finished-living-room.jpg",
    alt: "Finished living room with wood flooring, gray walls, white window trim, and seating",
    title: "Room for everyday living",
    category: "Living space",
    className: "project-landscape",
  },
] as const;

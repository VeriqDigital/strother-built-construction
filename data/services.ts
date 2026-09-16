export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
};
export const services: Service[] = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description:
      "A better place to cook, gather, and settle into everyday life.",
    detail:
      "Rethink the layout, function, and finishes of the room at the center of your home. Start with what works, what feels crowded, and how you would like to use the space.",
  },
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description:
      "Thoughtful spaces that make the beginning and end of each day feel better.",
    detail:
      "Bring comfort and purpose to your daily routine. Consider the layout, storage, and finishes that would make your bathroom feel more like your own.",
  },
  {
    slug: "basement-finishing",
    title: "Basement Finishing",
    description: "Make room for more life in the home you already have.",
    detail:
      "Give an underused lower level a new purpose. Share how you imagine using it, whether that means room to gather, space to work, or somewhere to unwind.",
  },
  {
    slug: "whole-home-remodeling",
    title: "Whole-Home Remodeling",
    description:
      "Bring your rooms together with a more cohesive way of living.",
    detail:
      "Look at the home as a whole, from the way rooms connect to the details that carry from one space to the next. A larger renovation starts with a clear picture of what needs to change.",
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    description:
      "More space for what comes next. Still the place you call home.",
    detail:
      "Explore the possibility of adding space while retaining the home and neighborhood you love. Tell us what is missing and how an addition could support your household.",
  },
];

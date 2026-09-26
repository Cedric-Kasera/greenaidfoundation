import { images } from "@/lib/site-content";

// Illustrative previews only. Replace with confirmed dates and locations before announcing events.
export const events = [
  {
    slug: "past-tree-planting",
    category: "Community action",
    title: "Past tree planting day",
    date: "August 10, 2026",
    status: "past",
    location: "Kehancha, Kenya",
    excerpt: "A successful past event.",
    image: images.field,
    alt: "Community members planting a tree together",
  },
  {
    slug: "community-tree-planting",
    category: "Community action",
    title: "Community tree planting day",
    date: "October 10, 2026",
    status: "upcoming",
    location: "Kehancha, Kenya",
    excerpt:
      "A day for neighbours to plant indigenous seedlings and care for the landscapes we share.",
    image: images.field,
    alt: "Community members planting a tree together",
  },
  {
    slug: "bees-and-coexistence",
    category: "Learning session",
    title: "Bees & coexistence",
    date: "October 10, 2026",
    status: "upcoming",
    location: "Location to be announced",
    excerpt:
      "Explore how beekeeping can support farmers while creating safer boundaries for wildlife.",
    image: images.bees,
    alt: "Beekeeping connected to the Yellow Project",
  },
  {
    slug: "waterways-restoration",
    category: "Community action",
    title: "Caring for our waterways",
    date: "October 10, 2026",
    status: "upcoming",
    location: "Location to be announced",
    excerpt:
      "Learn about riverbank restoration, bamboo buffers and keeping water catchments healthy.",
    image: images.river,
    alt: "River and its surrounding vegetation",
  },
] as const;

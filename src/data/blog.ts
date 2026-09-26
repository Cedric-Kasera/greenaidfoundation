import { images } from "@/lib/site-content";

// Editorial sample content, not published foundation news or claims of completed activity.
export const articles = [
  {
    slug: "why-indigenous-trees-matter",
    category: "The Green Project",
    title: "Why indigenous trees matter",
    excerpt:
      "Native trees belong to the rhythms of local soil, rainfall and wildlife. Here is why they are central to restoration.",
    image: images.seedlings,
    alt: "Seedlings in a tree nursery",
    readTime: "3 min read",
    body: [
      "Restoring a landscape is more than putting trees in the ground. Indigenous species can support local biodiversity and fit the conditions of the place where they grow.",
      "Tree nurseries and agroforestry create opportunities to bring restoration closer to the people who care for the land every day. Choosing the right tree for the right place is part of the work.",
    ],
  },
  {
    slug: "a-better-boundary-with-bees",
    category: "The Yellow Project",
    title: "A better boundary with bees",
    excerpt:
      "Beehive bio-fences offer a nature-led approach to the shared space between farms and elephants.",
    image: images.elephants,
    alt: "Elephants in their natural habitat",
    readTime: "4 min read",
    body: [
      "Living alongside wildlife calls for thoughtful ways to protect crops without closing off habitats. Beehive bio-fences are one approach: elephants tend to avoid bees.",
      "Apiculture also offers a possible honey livelihood for participating farmers. It is a practical example of how care for people and nature can reinforce each other.",
    ],
  },
  {
    slug: "the-value-of-healthy-waterways",
    category: "The Blue Project",
    title: "The value of healthy waterways",
    excerpt:
      "Water catchments and riverbanks connect ecosystems, farms and communities in ways we cannot separate.",
    image: images.water,
    alt: "Flowing water through a green landscape",
    readTime: "3 min read",
    body: [
      "Wetlands and riverbanks are living infrastructure. When they are cared for, they can help hold soil, support wildlife and protect the water that communities depend on.",
      "Bamboo buffers and community-led restoration are among the ways to look after these places, including catchments such as Orarwe Dam.",
    ],
  },
] as const;

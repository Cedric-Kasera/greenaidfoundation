import tree from "@/assets/TreePlanting1.jpg";
import elephants from "@/assets/elephantdrink.jpg";
import water from "@/assets/blueproj.jpg";
import field from "@/assets/GAF_treeplanting1.jpg";
import seedlings from "@/assets/seedlingnursary2.jpg";
import bees from "@/assets/Honey2.jpg";
import river from "@/assets/river.jpg";

export const images = {
  tree: tree,
  elephants: elephants,
  water: water,
  field: field,
  seedlings: seedlings,
  bees: bees,
  river: river,
};
export const projects = [
  {
    number: "01",
    name: "Green",
    kicker: "Restore what has been lost.",
    description: "Indigenous seedlings, agroforestry and community-led reforestation.",
    image: field,
    accent: "green",
    anchor: "green",
  },
  {
    number: "02",
    name: "Yellow",
    kicker: "Make room for coexistence.",
    description: "Beehive bio-fences that protect farms and create honey livelihoods.",
    image: elephants,
    accent: "gold",
    anchor: "yellow",
  },
  {
    number: "03",
    name: "Blue",
    kicker: "Protect the water that sustains us.",
    description: "Restoring wetlands, riverbanks and vital water catchments.",
    image: water,
    accent: "blue",
    anchor: "blue",
  },
] as const;

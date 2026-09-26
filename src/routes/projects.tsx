import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { images } from "@/lib/site-content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Green Aid Foundation" },
      {
        name: "description",
        content:
          "Explore Green Aid Foundation’s Green, Yellow and Blue projects restoring trees, fostering coexistence and protecting water in Kenya.",
      },
      { property: "og:title", content: "Our Projects — Green Aid Foundation" },
      {
        property: "og:description",
        content: "Three connected approaches to community-led conservation in Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});
const details = [
  {
    id: "green",
    number: "01 / THE GREEN PROJECT",
    title: "Rooting for a greener tomorrow.",
    intro: "Healthy landscapes begin with local hands and locally grown trees.",
    text: "We support reforestation, indigenous tree nurseries and agroforestry to revive land and strengthen livelihoods. The work responds in part to historic tree loss from tobacco farming, helping restore shade, soil health and biodiversity for the long term.",
    points: [
      "Indigenous tree nurseries",
      "Community planting & agroforestry",
      "Restoration of degraded land",
    ],
    image: images.seedlings,
    alt: "Young indigenous tree seedlings growing in a nursery",
    cta: "Request seedlings",
    to: "/seedlings" as const,
    color: "green",
  },
  {
    id: "yellow",
    number: "02 / THE YELLOW PROJECT",
    title: "A better boundary for all.",
    intro: "A simple idea with the power to protect both farms and wildlife.",
    text: "Beehive bio-fences along reserve borders use elephants’ natural aversion to bees to help reduce human-elephant conflict. Beekeeping also gives farmers a new source of income through honey, while pollinators support healthier crops and habitats.",
    points: ["Beehive bio-fences", "Farmer beekeeping training", "Honey-based livelihoods"],
    image: images.elephants,
    alt: "Elephants together in a savanna landscape",
    cta: "Support the work",
    to: "/support" as const,
    color: "gold",
  },
  {
    id: "blue",
    number: "03 / THE BLUE PROJECT",
    title: "Water is the thread that connects us.",
    intro: "Restoring waterways protects life far beyond the riverbank.",
    text: "We bring communities together around wetlands, riverbank restoration, bamboo buffers and water catchment protection. Places such as Orarwe Dam show why safeguarding water sources matters for biodiversity, agriculture and the generations to come.",
    points: [
      "Wetland & riverbank restoration",
      "Bamboo buffer planting",
      "Water catchment protection",
    ],
    image: images.water,
    alt: "Clean flowing water through a lush forest landscape",
    cta: "Support the work",
    to: "/support" as const,
    color: "blue",
  },
];
function Projects() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="OUR WORK / THREE CONNECTED PILLARS"
          title="A living landscape needs every part."
          description="From the trees above us to the water beneath them, our work joins community knowledge with practical conservation."
        />
        <div className="project-detail-list">
          {details.map((item) => (
            <section key={item.id} id={item.id} className={`project-detail detail-${item.color}`}>
              <div className="container project-detail-grid">
                <div className="project-detail-image">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="project-detail-copy">
                  <span className="eyebrow">{item.number}</span>
                  <h2>{item.title}</h2>
                  <p className="detail-intro">{item.intro}</p>
                  <p>{item.text}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to={item.to}>
                      {item.cta} <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

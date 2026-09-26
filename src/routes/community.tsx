import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { images } from "@/lib/site-content";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community & Education — Green Aid Foundation" },
      {
        name: "description",
        content:
          "Discover Green Aid Foundation’s Edu-Kids climate literacy and women and youth empowerment programs in Kenya.",
      },
      { property: "og:title", content: "Community & Education — Green Aid Foundation" },
      {
        property: "og:description",
        content: "Growing climate knowledge and opportunity alongside Kenyan communities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Community,
});
function Community() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="PEOPLE MAKE THE DIFFERENCE"
          title="The strongest roots are human."
          description="Conservation is not something done to a community. It is something built together, across generations."
        />
        <section className="community-feature">
          <div className="container community-feature-grid">
            <div>
              <span className="eyebrow">EDU-KIDS</span>
              <h2>Curiosity today. Stewardship tomorrow.</h2>
              <p>
                Edu-Kids makes climate and environmental learning accessible to young people. By
                helping children understand the natural world around them, we nurture a generation
                equipped to care for it.
              </p>
            </div>
            <img src={images.tree} alt="Young tree being planted by hand" />
          </div>
        </section>
        <section className="community-feature community-feature-alt">
          <div className="container community-feature-grid">
            <div>
              <span className="eyebrow">WOMEN & YOUTH</span>
              <h2>Opportunity belongs to everyone.</h2>
              <p>
                Our empowerment work connects environmental action with skills, participation and
                livelihoods. Community engagement at Taranganya Girls Anti-FGM Camp is one example
                of bringing conversations about nature and possibility to young people.
              </p>
            </div>
            <img src={images.field} alt="Community volunteers working together to plant trees" />
          </div>
        </section>
        <section className="closing-cta">
          <div className="container">
            <span className="eyebrow light">GROW WITH US</span>
            <h2>
              Stronger communities.
              <br />A healthier planet.
            </h2>
            <Button asChild className="light-button" size="lg">
              <Link to="/support">
                Support our work <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { images } from "@/lib/site-content";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About us",
      "Get to know Green Aid Foundation and its community-led approach to conservation in Kenya.",
    ),
  component: About,
});
function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="ABOUT THE FOUNDATION"
          title="Rooted in community. Growing with nature."
          description="Green Aid Foundation is an environmental NGO based in Kenya, working toward a future where people and nature thrive together."
        />
        <section className="editorial-feature">
          <div className="container editorial-feature-grid">
            <img src={images.field} alt="Community members planting a tree together" />
            <div>
              <span className="eyebrow">WHAT GUIDES US</span>
              <h2>Conservation belongs to everyone.</h2>
              <p>
                We are passionately dedicated to environmental conservation, sustainable
                development, and community empowerment. GAF focuses on impactful projects centered
                around reforestation and apiculture, aligning with the United Nations Sustainable
                Development Goals (SDGs).
              </p>
              <p>
                Operating as a non-profit foundation, we are committed to the preservation and
                protection of our environment and the diverse wildlife it sustains, addressing a
                range of community concerns, including malnutrition, unemployment, poverty,
                deforestation, and the pressing issue of climate change.
              </p>
              <Button asChild>
                <Link to="/projects">
                  Explore our projects <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="editorial-links-band">
          <div className="container">
            <span className="eyebrow">GET TO KNOW US</span>
            <div className="editorial-link-grid">
              <Link to="/team">
                Our team <ArrowUpRight />
              </Link>
              <Link to="/gallery">
                Gallery <ArrowUpRight />
              </Link>
              <Link to="/membership">
                Membership <ArrowUpRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

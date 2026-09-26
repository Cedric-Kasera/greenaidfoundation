import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorialCard } from "@/components/editorial-card";
import { HeroCarousel } from "@/components/hero-carousel";
import { ProjectCard } from "@/components/project-card";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { articles } from "@/data/blog";
import { events } from "@/data/events";
import { images, projects } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Green Aid Foundation — Growing coexistence in Kenya" },
      {
        name: "description",
        content:
          "Green Aid Foundation restores trees, protects water, supports beekeeping and brings communities together for a living future in Kenya.",
      },
      { property: "og:title", content: "Green Aid Foundation — Growing coexistence in Kenya" },
      {
        property: "og:description",
        content: "Community-led conservation across forests, farms and waterways in Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroCarousel />

        <section className="mission-band">
          <div className="container mission-grid">
            <div>
              <span className="eyebrow">OUR PURPOSE</span>
              <h2>Conservation works best when everyone belongs.</h2>
            </div>
            <div className="mission-right">
              <p>
                At Green Aid Foundation, we work alongside Kenyan communities to restore landscapes
                and create a safer, more resilient relationship between people and the natural
                world.
              </p>
              <Link to="/community" className="text-link">
                Meet the communities <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <section className="pillars-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">OUR APPROACH</span>
                <h2>
                  Three colours.
                  <br />
                  One living landscape.
                </h2>
              </div>
              <p>Interconnected solutions, rooted in the places and people they serve.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="impact-band">
          <div className="container impact-grid">
            <div className="impact-lead">
              <span className="eyebrow light">THE WORK AHEAD</span>
              <h2>
                Ambition rooted
                <br />
                in action.
              </h2>
            </div>
            <div className="impact-item">
              <strong>100,000</strong>
              <span>TREES / YEAR</span>
              <p>
                Our annual tree-planting ambition, growing from local nurseries and community
                participation.
              </p>
            </div>
            <div className="impact-item">
              <strong>03</strong>
              <span>CONNECTED PILLARS</span>
              <p>Green, Yellow and Blue work together to strengthen whole ecosystems.</p>
            </div>
            <div className="impact-item">
              <strong>01</strong>
              <span>SHARED FUTURE</span>
              <p>Safer livelihoods and healthier habitats for people and wildlife alike.</p>
            </div>
          </div>
        </section>

        <section className="story-section">
          <div className="container story-grid">
            <div className="story-image">
              <img
                src={images.seedlings}
                alt="Young tree seedlings growing in a Kenyan nursery"
                loading="lazy"
              />
              <span>GROWING FROM THE GROUND UP</span>
            </div>
            <div className="story-copy">
              <span className="eyebrow">THE GREEN PROJECT</span>
              <h2>Every forest begins somewhere.</h2>
              <p>
                From indigenous tree nurseries to agroforestry, we help communities restore land
                affected by deforestation and historic tree loss linked to tobacco farming. One
                seedling can be the beginning of a much bigger change.
              </p>
              <div className="story-actions">
                <Button asChild size="lg">
                  <Link to="/seedlings">
                    Request tree seedlings <ArrowUpRight />
                  </Link>
                </Button>
                <Link to="/projects" hash="green" className="text-link">
                  Discover the project <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="community-teaser">
          <div className="container community-teaser-inner">
            <div>
              <span className="eyebrow">BEYOND THE LANDSCAPE</span>
              <h2>
                Knowledge grows
                <br />
                with a community.
              </h2>
              <p>
                From Edu-Kids climate literacy to women and youth empowerment, lasting conservation
                starts with people.
              </p>
              <Link to="/community" className="text-link">
                Explore our community work <MoveUpRight size={18} />
              </Link>
            </div>
            <img
              src={images.field}
              alt="Green Aid Foundation community members planting a tree together"
              loading="lazy"
            />
          </div>
        </section>

        <section className="home-editorial">
          <div className="container">
            <div className="editorial-section-heading">
              <div>
                <span className="eyebrow">GATHER TOGETHER</span>
                <h2>Community events</h2>
                <p>Ideas for meeting, learning and taking action together.</p>
              </div>
            </div>
            <p className="editorial-note">
              Illustrative event previews — dates and locations are not yet confirmed.
            </p>
            <div className="editorial-card-grid">
              {events.map((event) => (
                <EditorialCard key={event.slug} item={event} kind="events" />
              ))}
            </div>
            <div className="editorial-more">
              <Button variant="outline" asChild>
                <Link to="/events">
                  View more events <ArrowUpRight size={17} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="home-editorial home-editorial-alt">
          <div className="container">
            <div className="editorial-section-heading">
              <div>
                <span className="eyebrow">FIELD NOTES</span>
                <h2>Stories worth sharing</h2>
                <p>Perspectives on the work of caring for a living landscape.</p>
              </div>
            </div>
            <p className="editorial-note">
              Sample stories about our focus areas, not reports of completed activities.
            </p>
            <div className="editorial-card-grid">
              {articles.map((article) => (
                <EditorialCard key={article.slug} item={article} kind="blog" />
              ))}
            </div>
            <div className="editorial-more">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  View more stories <ArrowUpRight size={17} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="container">
            <span className="eyebrow light">BE PART OF THE CHANGE</span>
            <h2>
              Help the next generation
              <br />
              inherit a living world.
            </h2>
            <Button asChild size="lg" className="light-button">
              <Link to="/support">
                Ways to give <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

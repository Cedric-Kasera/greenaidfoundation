import { images } from "@/lib/site-content";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { teamRoles } from "@/data/team";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/team")({
  head: () =>
    pageMeta(
      "Our team",
      "Learn about the people and roles behind community-led conservation at Green Aid Foundation.",
    ),
  component: Team,
});
function Team() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="ABOUT / OUR TEAM"
          title="People make the work possible."
          description="Local relationships and shared stewardship are at the heart of everything we do."
        />
        <section className="editorial-list-section">
          <div className="container">
            <div className="role-grid">
              {teamRoles.map((role, i) => (
                <article className="role-card" key={role.title}>
                  <span className="eyebrow">0{i + 1} / TEAM MEMBER</span>
                  <h2>{role.title}</h2>
                  <p>{role.description}</p>
                </article>
              ))}
            </div>
            <Link to="/contact" className="text-link">
              Get in touch <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

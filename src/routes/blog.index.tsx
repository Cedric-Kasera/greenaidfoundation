import { images } from "@/lib/site-content";
import { createFileRoute } from "@tanstack/react-router";
import { EditorialCard } from "@/components/editorial-card";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { articles } from "@/data/blog";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/blog/")({
  head: () =>
    pageMeta(
      "Field notes",
      "Read Green Aid Foundation stories about trees, coexistence, water and community-led conservation.",
    ),
  component: Blog,
});
function Blog() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="FIELD NOTES"
          title="Stories from a living landscape."
          description="Ideas and perspectives on trees, bees, water and the people connecting them."
        />
        <section className="editorial-list-section">
          <div className="container">
            <p className="editorial-note">
              These sample stories introduce the foundation’s focus areas and are not reports of
              completed activities.
            </p>
            <div className="editorial-card-grid">
              {articles.map((article) => (
                <EditorialCard key={article.slug} item={article} kind="blog" />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

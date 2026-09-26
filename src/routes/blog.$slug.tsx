import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { articles } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — Green Aid Foundation`
          : "Story unavailable — Green Aid Foundation",
      },
      { name: "description", content: loaderData?.excerpt ?? "This story is unavailable." },
      { property: "og:title", content: loaderData?.title ?? "Story unavailable" },
      { property: "og:description", content: loaderData?.excerpt ?? "This story is unavailable." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <>
      <SiteHeader />
      <main>
        <div className="container detail-page">
          <h1>Story not found.</h1>
          <Link to="/blog" className="text-link">
            Back to field notes
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  ),
  component: Article,
});

function Article() {
  const article = Route.useLoaderData();
  return (
    <>
      <SiteHeader />
      <main>
        <article className="detail-page" style={{ paddingBottom: "80px" }}>
          <div className="container" style={{ padding: "12px 0 16px", fontSize: "0.875rem" }}>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog">Blog</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{article.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div
            className="container blog-details-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 3fr) minmax(0, 1fr)",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Left Column: Blog Details (Header, Cover Image & Body Content) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="detail-header">
                <span className="eyebrow">{article.category}</span>
                <h1 style={{ fontSize: "36px", fontWeight: 700, margin: "12px 0 8px" }}>
                  {article.title}
                </h1>
                <span className="article-time" style={{ color: "var(--muted-foreground)", fontSize: "14px" }}>
                  {article.readTime}
                </span>
              </div>

              <div className="detail-cover">
                <img
                  src={article.image}
                  alt={article.alt}
                  style={{
                    width: "100%",
                    maxHeight: "520px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="detail-copy" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {article.body.map((paragraph) => (
                  <p key={paragraph} style={{ fontSize: "17px", lineHeight: "1.8", color: "#222" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column: Similar Posts (Sticky) */}
            <div
              style={{
                position: "sticky",
                top: "100px",
                height: "fit-content",
                background: "var(--canvas)",
                padding: "24px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>
                Similar Posts
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {articles
                  .filter((a) => a.slug !== article.slug)
                  .slice(0, 6)
                  .map((sim) => (
                    <Link
                      to="/blog/$slug"
                      params={{ slug: sim.slug }}
                      key={sim.slug}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "flex-start",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <img
                        src={sim.image}
                        alt={sim.alt}
                        style={{
                          width: "75px",
                          height: "75px",
                          objectFit: "cover",
                          borderRadius: "6px",
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <h4
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            margin: "0 0 4px 0",
                            lineHeight: 1.3,
                          }}
                        >
                          {sim.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "12px",
                            color: "var(--muted-foreground)",
                            margin: 0,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {sim.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { events } from "@/data/events";
export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((item) => item.slug === params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} — Green Aid Foundation`
          : "Event unavailable — Green Aid Foundation",
      },
      { name: "description", content: loaderData?.excerpt ?? "This event preview is unavailable." },
      { property: "og:title", content: loaderData?.title ?? "Event unavailable" },
      {
        property: "og:description",
        content: loaderData?.excerpt ?? "This event preview is unavailable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  notFoundComponent: () => (
    <>
      <SiteHeader />
      <main>
        <div className="container detail-page">
          <h1>Event not found.</h1>
          <Link to="/events" className="text-link">
            Back to events
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  ),
  component: EventDetail,
});
function EventDetail() {
  const event = Route.useLoaderData();
  return (
    <>
      <SiteHeader />
      <main>
        <article className="detail-page">
          <div className="container" style={{ padding: '12px 0 16px', fontSize: '0.875rem' }}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/events">Events</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{event.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
<div className="container detail-header" style={{ paddingTop: "24px" }}>
            
            <span className="eyebrow">{event.category}</span>
            <h1>{event.title}</h1>
            <div className="event-meta">
              <span>{event.date}</span>
              <span>{event.location}</span>
            </div>
          </div>
          <div className="container detail-cover">
            <img src={event.image} alt={event.alt} />
          </div>
          <div
            className="container detail-copy"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 300px",
              gap: "40px",
              alignItems: "start",
            }}
          >
            <div>
              <p>{event.excerpt}</p>
              <p>
                This preview is illustrative. Contact Green Aid Foundation to ask about confirmed
                activities, participation and accessibility.
              </p>
              {event.status === "upcoming" && (
                <div style={{ marginTop: "40px" }}>
                  <h3>Register for Event</h3>
                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      marginTop: "20px",
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid var(--border)",
                      }}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid var(--border)",
                      }}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid var(--border)",
                      }}
                      required
                    />
                    <input
                      type="text"
                      placeholder="ID Number"
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid var(--border)",
                      }}
                      required
                    />
                    <Button type="button" className="btn-accent">
                      Register Now
                    </Button>
                  </form>
                </div>
              )}
            </div>
            <div style={{ background: "var(--canvas)", padding: "24px", borderRadius: "8px" }}>
              <h3 style={{ marginBottom: "16px" }}>Event Details</h3>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Time:</strong> 09:00 AM
              </p>
              <p>
                <strong>Category:</strong> {event.category}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

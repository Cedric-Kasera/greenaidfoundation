import { images } from "@/lib/site-content";
import { createFileRoute } from "@tanstack/react-router";
import { EditorialCard } from "@/components/editorial-card";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { events } from "@/data/events";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/events/")({
  head: () =>
    pageMeta(
      "Events",
      "Explore upcoming Green Aid Foundation community conservation event previews.",
    ),
  component: Events,
});
function Events() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="EVENTS"
          title="Meet, learn and act together."
          description="Explore upcoming opportunities to connect with community-led conservation."
        />
        <section className="editorial-list-section">
          <div className="container">
            <p className="editorial-note">
              These are illustrative event previews. Dates and locations will be updated when
              activities are confirmed.
            </p>
            <h2>Upcoming Events</h2>
            <div className="editorial-card-grid">
              {events
                .filter((e) => e.status === "upcoming")
                .map((event) => (
                  <EditorialCard key={event.slug} item={event} kind="events" />
                ))}
            </div>
            <h2 style={{ marginTop: "40px" }}>Past Events</h2>
            <div className="editorial-card-grid">
              {events
                .filter((e) => e.status === "past")
                .map((event) => (
                  <EditorialCard key={event.slug} item={event} kind="events" />
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

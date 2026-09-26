import { images } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact",
      "Contact Green Aid Foundation in Kehancha, Kenya about conservation, seedlings, partnerships and support.",
    ),
  component: Contact,
});
function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="CONTACT"
          title="Let’s talk about what we can grow together."
          description="Questions, partnerships or ideas for your community? We would love to hear from you."
        />
        <section className="editorial-list-section">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">REACH THE FOUNDATION</span>
              <h2>Get in touch.</h2>
              <p>
                For seedling requests, use the dedicated request page so you can include your
                planting details.
              </p>
            </div>
            <div className="contact-methods">
              <a href="mailto:info@greenaidfoundation.org">
                <Mail size={22} />
                <span>
                  <strong>Email</strong>info@greenaidfoundation.org
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a href="tel:+254795332323">
                <Phone size={22} />
                <span>
                  <strong>Phone</strong>+254 795 332 323
                </span>
                <ArrowUpRight size={18} />
              </a>
              <div>
                <MapPin size={22} />
                <span>
                  <strong>Location</strong>Office 38-40413, Kehancha, Kenya
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: '75px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--canvas)', padding: '40px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Send us a message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Full Name" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} required />
              <input type="email" placeholder="Email Address" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} required />
              <input type="tel" placeholder="Phone Number" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} required />
              <input type="text" placeholder="Subject" style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)' }} required />
              <textarea placeholder="Message" rows={5} style={{ padding: '12px', borderRadius: '4px', border: '1px solid var(--border)', resize: 'vertical' }} required></textarea>
              <Button type="button" className="btn-green">Send Message</Button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

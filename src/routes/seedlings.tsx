import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { images } from "@/lib/site-content";

export const Route = createFileRoute("/seedlings")({
  head: () => ({
    meta: [
      { title: "Request Tree Seedlings — Green Aid Foundation" },
      {
        name: "description",
        content:
          "Request indigenous tree or bamboo seedlings from Green Aid Foundation and join community-led planting in Kenya.",
      },
      { property: "og:title", content: "Request Tree Seedlings — Green Aid Foundation" },
      {
        property: "og:description",
        content: "Tell Green Aid Foundation about your planting plans and request seedlings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Seedlings,
});
function Seedlings() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Tree seedling request — " + String(data.get("name")));
    const message = encodeURIComponent(
      `Hello Green Aid Foundation,\n\nI would like to request tree seedlings.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nSub-county / area: ${data.get("location")}\nSeedling variety: ${data.get("variety")}\nQuantity: ${data.get("quantity")}\nPlanned planting date: ${data.get("date") || "To be confirmed"}\nOrganization / group: ${data.get("organization") || "Not specified"}\nPlanting plan: ${data.get("notes") || "Not specified"}\n\nThank you.`,
    );
    setSubmitted(true);
    window.location.href = `mailto:info@greenaidfoundation.org?subject=${subject}&body=${message}`;
  }
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="THE GREEN PROJECT / GET INVOLVED"
          title="Let’s grow something together."
          description="Tell us about your planting plans and the seedlings you need. We’ll help you take the next step."
        />
        <section className="request-section">
          <div className="container request-grid">
            <div className="request-aside">
              <img src={images.seedlings} alt="Rows of young seedlings ready for planting" />
              <h2>Small beginnings. Lasting change.</h2>
              <p>
                Our seedling efforts help put more indigenous trees into the ground and more agency
                into the hands of local growers.
              </p>
              <div className="request-note">
                <Check size={18} />
                <span>For individuals, groups and community planting initiatives.</span>
              </div>
            </div>
            <div className="request-form-area">
              <span className="eyebrow">TREE SEEDLING REQUEST</span>
              <h2>Tell us what you’re planning.</h2>
              <p className="form-explainer">
                Submitting opens your email app with the request details ready to send. No
                information is stored on this website.
              </p>
              <form onSubmit={handleSubmit} className="seedling-form">
                <div className="form-row">
                  <label>
                    Full name <span>*</span>
                    <input name="name" required autoComplete="name" placeholder="Your full name" />
                  </label>
                  <label>
                    Email address <span>*</span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Phone number <span>*</span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+254 ..."
                    />
                  </label>
                  <label>
                    Sub-county / area <span>*</span>
                    <input name="location" required placeholder="Where will you plant?" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Seedling variety <span>*</span>
                    <select name="variety" required defaultValue="">
                      <option value="" disabled>
                        Select a variety
                      </option>
                      <option>Indigenous trees</option>
                      <option>Bamboo</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label>
                    Number of seedlings <span>*</span>
                    <input name="quantity" type="number" min="1" required placeholder="e.g. 25" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Planned planting date
                    <input name="date" type="date" />
                  </label>
                  <label>
                    Organization or group
                    <input name="organization" placeholder="Optional" />
                  </label>
                </div>
                <label>
                  Tell us about your planting plan
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="A little about your site, group, or goals"
                  />
                </label>
                <Button type="submit" size="lg" className="form-submit">
                  Prepare email request <Mail size={17} />
                </Button>
                {submitted && (
                  <p className="form-confirmation" role="status">
                    Your email app should open with the request ready to send. Please send the
                    message to complete your request.
                  </p>
                )}
                <p className="form-fallback">
                  No email app? Write to{" "}
                  <a href="mailto:info@greenaidfoundation.org">
                    info@greenaidfoundation.org <ArrowUpRight size={14} />
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

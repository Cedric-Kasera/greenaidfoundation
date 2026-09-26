import { images } from "@/lib/site-content";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Donate & Support — Green Aid Foundation" },
      {
        name: "description",
        content:
          "Support Green Aid Foundation’s conservation work in Kenya. Give with M-Pesa Paybill 4147861 or contact the team for international giving.",
      },
      { property: "og:title", content: "Donate & Support — Green Aid Foundation" },
      {
        property: "og:description",
        content: "Practical ways to support trees, coexistence and clean water in Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Support,
});
function Support() {
  const [copied, setCopied] = useState(false);
  async function copyPaybill() {
    try {
      await navigator.clipboard.writeText("4147861");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="GIVE / PARTNER / GROW"
          title="Your support takes root here."
          description="Every contribution helps turn local conservation ideas into lasting work for forests, farms, waterways and communities."
        />
        <section className="support-section">
          <div className="container">
            <div className="support-heading">
              <span className="eyebrow">CHOOSE HOW TO GIVE</span>
              <h2>Simple ways to stand with nature.</h2>
            </div>
            <div className="support-grid">
              <div className="support-panel">
                <div className="support-panel-top">
                  <span>01 / GIVE IN KENYA</span>
                  <h3>M-Pesa Paybill</h3>
                  <p>Give directly through M-Pesa on your phone.</p>
                </div>
                <div className="paybill-box">
                  <span>BUSINESS NUMBER</span>
                  <div>
                    <strong>4147861</strong>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyPaybill}
                      aria-label="Copy Paybill number"
                      title="Copy Paybill number"
                    >
                      {copied ? <Check /> : <Copy />}
                    </Button>
                  </div>
                  {copied && <small role="status">Copied</small>}
                </div>
                <ol>
                  <li>
                    Open M-Pesa and select <strong>Pay Bill</strong>.
                  </li>
                  <li>
                    Enter business number <strong>4147861</strong>.
                  </li>
                  <li>
                    Enter <strong>your name</strong> as the account number.
                  </li>
                  <li>Enter your amount, confirm and send.</li>
                </ol>
              </div>
              <div className="support-panel">
                <div className="support-panel-top">
                  <span>02 / GIVE FROM ABROAD</span>
                  <h3>International giving</h3>
                  <p>
                    Outside Kenya? Get in touch to arrange a contribution or ask about current
                    international payment options.
                  </p>
                </div>
                <div className="international-action">
                  <a href="mailto:info@greenaidfoundation.org?subject=International%20giving%20enquiry">
                    Email our team <ExternalLink size={17} />
                  </a>
                  <span>info@greenaidfoundation.org</span>
                </div>
                <div className="support-divider" />
                <span className="eyebrow">MORE WAYS TO HELP</span>
                <p className="support-extra">
                  Partner on a project, support a tree nursery, or share your skills with a
                  community initiative.
                </p>
              </div>
            </div>
            <p className="support-disclosure">
              The Paybill number and instructions above are published by Green Aid Foundation. For
              receipts, partnership details or other payment methods, please contact the foundation
              directly.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { images } from "@/lib/site-content";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/membership")({
  head: () =>
    pageMeta(
      "Membership",
      "Join Green Aid Foundation and participate in community conservation, tree planting, and sustainability in Kenya.",
    ),
  component: Membership,
});

function Membership() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="ABOUT / MEMBERSHIP"
          title="Find your place in the work."
          description="Whether you want to learn, volunteer or partner, there are many ways to stand alongside community conservation."
        />

        <section className="container" style={{ padding: "60px 0 80px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Left Column: Info & Image Illustrations */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div>
                <span className="eyebrow">JOIN THE CONVERSATION</span>
                <h2 style={{ fontSize: "32px", fontWeight: 700, margin: "12px 0 16px" }}>
                  Become an Active Member
                </h2>
                <p style={{ color: "var(--muted-foreground)", lineHeight: "1.7", fontSize: "16px" }}>
                  By becoming a member, you actively contribute to environmental initiatives and
                  community development. Your support helps us make a meaningful impact on the
                  environment. Join us today in making a difference by participating in our Green,
                  Blue, or Yellow projects.
                </p>
              </div>

              {/* Image Illustrations Grid */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 600 }}>Our Pillars & Focus Areas</h3>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    background: "var(--canvas)",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <img
                    src={images.field}
                    alt="Green Project"
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "6px" }}
                  />
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "15px" }}>Green Project</h4>
                    <p style={{ fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
                      Reforestation, indigenous tree seedling planting & nursery development.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    background: "var(--canvas)",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <img
                    src={images.elephants}
                    alt="Yellow Project"
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "6px" }}
                  />
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "15px" }}>Yellow Project</h4>
                    <p style={{ fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
                      Human-wildlife coexistence, beehive fencing & community livelihoods.
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    background: "var(--canvas)",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <img
                    src={images.water}
                    alt="Blue Project"
                    style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "6px" }}
                  />
                  <div>
                    <h4 style={{ fontWeight: 600, fontSize: "15px" }}>Blue Project</h4>
                    <p style={{ fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
                      Protection of riverbanks, natural springs, water towers & wetlands.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits list */}
              <div style={{ background: "var(--canvas)", padding: "20px", borderRadius: "8px" }}>
                <h4 style={{ fontWeight: 600, marginBottom: "12px", fontSize: "15px" }}>
                  Member Benefits:
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "14px",
                    color: "var(--muted-foreground)",
                  }}
                >
                  <li>Participate in community tree-planting & conservation drives.</li>
                  <li>Receive regular field notes, newsletters, and project reports.</li>
                  <li>Join workshops, environmental education & youth programs.</li>
                  <li>Connect with a dedicated network of environmental stewards.</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div
              style={{
                background: "var(--canvas)",
                padding: "36px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              }}
            >
              <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
                Membership Application
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--muted-foreground)",
                  marginBottom: "24px",
                }}
              >
                Fill out the form below to apply for foundation membership.
              </p>

              <form style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jane Doe"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "white",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. jane@example.com"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "white",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +254 700 000 000"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "white",
                    }}
                    required
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Membership Category *
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "white",
                    }}
                    required
                  >
                    <option value="individual">Individual Member</option>
                    <option value="student">Youth / Student Member</option>
                    <option value="community">Community Group Member</option>
                    <option value="corporate">Corporate / Partner Member</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Primary Project Interest *
                  </label>
                  <select
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "white",
                    }}
                    required
                  >
                    <option value="green">Green Project (Tree Planting & Reforestation)</option>
                    <option value="yellow">Yellow Project (Beehives & Coexistence)</option>
                    <option value="blue">Blue Project (Water Towers & Wetlands)</option>
                    <option value="all">All Projects</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    County / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kehancha, Migori County"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "white",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Why do you want to join Green Aid Foundation?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us briefly about your motivation..."
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      border: "1px solid var(--border)",
                      background: "white",
                      resize: "vertical",
                    }}
                  ></textarea>
                </div>

                <Button type="button" className="btn-green" size="lg" style={{ marginTop: "8px" }}>
                  Submit Membership Application
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

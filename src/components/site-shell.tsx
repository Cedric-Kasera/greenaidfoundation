import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Green_Aid_Foundation_1.png";

const aboutLinks = [
  { label: "About us", to: "/about" },
  { label: "Our team", to: "/team" },
  { label: "Gallery", to: "/gallery" },
  { label: "Membership", to: "/membership" },
] as const;

const navigation = [
  { label: "Our work", to: "/projects" },
  { label: "Community", to: "/community" },
  { label: "Events", to: "/events" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <div className="top-info-banner">
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>info@greenaidfoundation.org</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>+254 795 332 323</span>
        </div>
        <div>
          <Button asChild className="btn-green" size="sm" style={{ height: "30px" }}>
            <Link to="/seedlings">Request Seedlings</Link>
          </Button>
        </div>
      </div>

      <header className="site-header">
        <div className="site-header-inner">
          <Link
            to="/"
            className="brand"
            aria-label="Green Aid Foundation, home"
            onClick={() => setOpen(false)}
          >
            <img src={logo} alt="Green Aid Foundation" />
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <details className="nav-dropdown">
              <summary
                className={aboutLinks.some((item) => item.to === pathname) ? "nav-active" : ""}
              >
                About <ChevronDown size={15} />
              </summary>
              <div className="nav-dropdown-panel">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={pathname === item.to ? "nav-active" : ""}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className={pathname === item.to ? "nav-active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions" style={{ display: "flex", gap: "10px" }}>
            <Button asChild variant="outline" className="btn-accent">
              <Link to="/membership">Join Us</Link>
            </Button>
            <Button asChild className="btn-accent">
              <Link to="/support">
                Support our work <ArrowUpRight />
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {open && <div className="mobile-nav-backdrop" onClick={() => setOpen(false)}></div>}
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="mobile-nav-header">
              <img src={logo} alt="Green Aid Foundation" width={130} />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X size={22} />
              </Button>
            </div>

            <div className="mobile-nav-list">
              <Link to="/" onClick={() => setOpen(false)} className="mobile-nav-item">
                Home
              </Link>

              <details className="mobile-about-details">
                <summary className="mobile-nav-item">
                  <span>About</span>
                  <span className="mobile-arrow-btn"><ChevronRight size={16} /></span>
                </summary>
                <div className="mobile-sub-links">
                  {aboutLinks.map((item) => (
                    <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>

              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="mobile-nav-item"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mobile-nav-actions">
              <Button
                asChild
                variant="outline"
                className="btn-accent"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Link to="/membership" onClick={() => setOpen(false)}>
                  Join Us
                </Link>
              </Button>
              <Button
                asChild
                className="btn-accent"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Link to="/support" onClick={() => setOpen(false)}>
                  Support our work <ArrowUpRight size={17} />
                </Link>
              </Button>
            </div>

            <div className="mobile-nav-footer">
              <div className="mobile-contact-row">
                <div className="mobile-icon-circle"><Mail size={16} /></div>
                <span>info@greenaidfoundation.org</span>
              </div>
              <div className="mobile-contact-row">
                <div className="mobile-icon-circle"><Phone size={16} /></div>
                <span>+254 795 332 323</span>
              </div>
              <div className="mobile-social-row">
                <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="footer-watermark"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      >
        <img src={logo} alt="" style={{ width: "400px" }} />
      </div>
      <div className="container footer-main" style={{ position: "relative", zIndex: 1 }}>
        <div className="footer-statement">
          <img src={logo} alt="Green Aid Foundation Logo" style={{ width: "150px", marginBottom: "20px" }} />
          <span className="eyebrow light">GREEN AID FOUNDATION · KENYA</span>
          <h2>A living future is something we grow together.</h2>
        </div>
        <div className="footer-links">
          <span>Discover</span>
          <Link to="/about">About us</Link>
          <Link to="/projects">Our projects</Link>
          <Link to="/community">Community & education</Link>
          <Link to="/events">Events</Link>
          <Link to="/blog">Field notes</Link>
          <Link to="/tenders">Tenders</Link>
          <Link to="/careers">Careers</Link>
        </div>
        <div className="footer-links">
          <span>Connect</span>
          <Link to="/seedlings">Request seedlings</Link>
          <Link to="/support">Give & support</Link>
          <a href="mailto:info@greenaidfoundation.org">info@greenaidfoundation.org</a>
          <a href="tel:+254795332323">+254 795 332 323</a>
          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Green Aid Foundation</span>
        <span>Rooted in community. Growing for tomorrow.</span>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  bgImage,
}: {
  eyebrow: string;
  title: string;
  description: string;
  bgImage?: string;
}) {
  return (
    <section
      className={`page-intro ${bgImage ? "has-bg" : ""}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="page-intro-shade"></div>
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

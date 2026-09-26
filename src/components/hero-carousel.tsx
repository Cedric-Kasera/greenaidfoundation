import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/site-content";

const slides = [
  {
    image: images.tree,
    alt: "Hands planting a young tree in the soil",
    eyebrow: "ROOTED IN KENYA · GROWING TOGETHER",
    title: (
      <>
        Where people
        <br />
        and nature <em>thrive.</em>
      </>
    ),
    description:
      "Building a future of harmonious coexistence through trees, bees, water, and the communities that care for them.",
    to: "/projects" as const,
    action: "Explore our work",
  },
  {
    image: images.elephants,
    alt: "Elephants gathered at a water source",
    eyebrow: "THE YELLOW PROJECT · LIVING TOGETHER",
    title: (
      <>
        A place for people
        <br />
        and <em>wildlife.</em>
      </>
    ),
    description:
      "Beehive bio-fences help communities protect farms and make room for elephants, while opening new honey livelihoods.",
    to: "/projects" as const,
    action: "Discover the project",
  },
  {
    image: images.water,
    alt: "Flowing water through a green landscape",
    eyebrow: "THE BLUE PROJECT · WATER IS LIFE",
    title: (
      <>
        Let the waterways
        <br />
        <em>flow.</em>
      </>
    ),
    description:
      "Healthy wetlands, riverbanks and catchments nurture communities and ecosystems for generations to come.",
    to: "/projects" as const,
    action: "Explore our work",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [paused]);
  const go = (step: number) =>
    setActive((current) => (current + step + slides.length) % slides.length);
  const slide = slides[active] ?? slides[0];
  if (!slide) return null;
  return (
    <section
      className="home-hero"
      aria-label="Green Aid Foundation highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          className={`hero-image ${active === index ? "is-active" : ""}`}
          src={slide.image}
          alt={active === index ? slide.alt : ""}
          aria-hidden={active !== index}
        />
      ))}
      <div className="hero-shade" />
      <div className="container hero-content" key={active}>
        <div className="hero-eyebrow">
          <span className="line" /> {slide.eyebrow}
        </div>
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <div className="hero-actions">
          <Button asChild size="lg" className="hero-primary btn-accent">
            <Link
              to={slide.to}
              {...(active === 1 ? { hash: "yellow" } : active === 2 ? { hash: "blue" } : {})}
            >
              {slide.action} <ArrowUpRight />
            </Link>
          </Button>
          <Link className="hero-text-link" to="/support">
            Support the mission <ArrowRight size={17} />
          </Link>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>KEHANCHA, KENYA</span>
        <div className="hero-controls" aria-label="Carousel controls">
          <Button variant="ghost" size="icon" aria-label="Previous slide" onClick={() => go(-1)}>
            <ChevronLeft size={19} />
          </Button>
          <div className="hero-dots">
            {slides.map((slide, index) => (
              <Button
                key={slide.image}
                variant="ghost"
                size="icon"
                className={index === active ? "is-active" : ""}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => setActive(index)}
              >
                <span />
              </Button>
            ))}
          </div>
          <Button variant="ghost" size="icon" aria-label="Next slide" onClick={() => go(1)}>
            <ChevronRight size={19} />
          </Button>
        </div>
        <span className="hero-scroll">
          SCROLL TO EXPLORE <ArrowDown size={16} />
        </span>
      </div>
    </section>
  );
}

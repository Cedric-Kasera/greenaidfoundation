import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { images } from "@/lib/site-content";
import { pageMeta } from "@/lib/page-meta";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const allPhotos = [
  { src: images.tree, alt: "Hands planting a young tree in soil", caption: "Growing new roots" },
  { src: images.field, alt: "Community tree planting in Kenya", caption: "Planting together" },
  { src: images.seedlings, alt: "Tree seedlings growing in a nursery", caption: "The nursery" },
  { src: images.elephants, alt: "Elephants gathered at a water source", caption: "Shared landscapes" },
  { src: images.bees, alt: "Honey and beekeeping", caption: "Bees & livelihoods" },
  { src: images.water, alt: "Water flowing through a green landscape", caption: "Living waterways" },
  { src: images.river, alt: "River restoration project in Kehancha", caption: "Riverbed restoration" },
  { src: images.field, alt: "Volunteers gathering seedlings", caption: "Community nursery" },
  { src: images.tree, alt: "Reforestation site in Migori county", caption: "Native forest canopy" },
  { src: images.elephants, alt: "Coexistence corridor monitoring", caption: "Wildlife corridor" },
  { src: images.bees, alt: "Harvesting sustainable honey", caption: "Sustainable honey" },
  { src: images.seedlings, alt: "Potting indigenous saplings", caption: "Sapling prep" },
];

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta(
      "Gallery",
      "Explore photographs of trees, wildlife, water and community conservation at Green Aid Foundation.",
    ),
  component: Gallery,
});

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const displayedPhotos = allPhotos.slice(0, visibleCount);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % displayedPhotos.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + displayedPhotos.length) % displayedPhotos.length);
    }
  };

  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          bgImage={images.field}
          eyebrow="ABOUT / GALLERY"
          title="A closer look at the landscape."
          description="Moments from the places and natural systems that inspire our work."
        />
        <section className="editorial-list-section">
          <div className="container gallery-grid">
            {displayedPhotos.map((photo, index) => (
              <figure
                key={`${photo.caption}-${index}`}
                className="gallery-item"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedIndex(index)}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>

          {visibleCount < allPhotos.length && (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((prev) => Math.min(prev + 6, allPhotos.length))}
              >
                Load More Photos
              </Button>
            </div>
          )}
        </section>

        {/* Modal Lightbox */}
        {selectedIndex !== null && (
          <div
            onClick={() => setSelectedIndex(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "8px",
                zIndex: 10000,
              }}
            >
              <X size={32} />
            </button>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                color: "white",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10000,
              }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
                color: "white",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10000,
              }}
            >
              <ChevronRight size={28} />
            </button>

            {/* Image & Caption Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={displayedPhotos[selectedIndex].src}
                alt={displayedPhotos[selectedIndex].alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                }}
              />
              <p
                style={{
                  color: "white",
                  marginTop: "16px",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {displayedPhotos[selectedIndex].caption}
              </p>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}

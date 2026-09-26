import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

type CardData = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  date?: string;
};

export function EditorialCard({ item, kind }: { item: CardData; kind: "blog" | "events" }) {
  return (
    <Link
      to={kind === "blog" ? "/blog/$slug" : "/events/$slug"}
      params={{ slug: item.slug }}
      className="editorial-card"
    >
      <div className="editorial-card-image">
        <img src={item.image} alt={item.alt} loading="lazy" />
        {item.date && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "white",
              color: "black",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {item.date}
          </div>
        )}
      </div>
      <div className="editorial-card-body">
        <span className="eyebrow">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <span className="card-read">
          {kind === "blog" ? "Read story" : "Explore event"} <ArrowUpRight size={17} />
        </span>
      </div>
    </Link>
  );
}

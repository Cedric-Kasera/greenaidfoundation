import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  number: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  accent: "green" | "gold" | "blue";
  anchor: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to="/projects" hash={project.anchor} className={`project-card project-${project.accent}`}>
      <div className="project-card-image">
        <img src={project.image} alt={project.kicker} loading="lazy" />
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span>
            {project.number} / THE {project.name.toUpperCase()} PROJECT
          </span>
          <ArrowUpRight size={19} />
        </div>
        <h3>{project.kicker}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

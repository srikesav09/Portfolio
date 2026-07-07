import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import BrowserMockup from "./BrowserMockup";
import TechBadge from "./TechBadge";
import Button from "./Button";

export default function ProjectCard({
  project,
  reverse = false,
}) {
  return (
    <div
      className={`
        grid
        items-center
        gap-12
        lg:grid-cols-2
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Image */}

      <BrowserMockup
        image={project.image}
        title={project.title}
      />

      {/* Content */}

      <div>

        <p className="mb-2 text-blue-400 font-medium">
          {project.category}
        </p>

        <h3 className="text-4xl font-bold">
          {project.title}
        </h3>

        <p className="mt-6 leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
            />
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          {project.live && (
            <Button href={project.live}>
              <span className="flex items-center gap-2">
                <FaExternalLinkAlt />
                Live Demo
              </span>
            </Button>
          )}

          <Button
            variant="outline"
            href={project.github}
          >
            <span className="flex items-center gap-2">
              <FaGithub />
              Source Code
            </span>
          </Button>

        </div>

      </div>

    </div>
  );
}
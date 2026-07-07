import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Card from "../common/Card";
import BrowserMockup from "./BrowserMockup";
import TechBadge from "./TechBadge";
import Button from "../common/Button";

export default function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">

      <BrowserMockup
        image={project.image}
        title={project.title}
      />

      <div className="p-6">

        <p className="mb-2 text-sm font-medium text-blue-400">
          {project.category}
        </p>

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>


        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
            />
          ))}
        </div>


        <div className="mt-6">
          <h4 className="mb-3 font-semibold">
            Key Features
          </h4>

          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-slate-400"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-4">

          {project.live && (
            <Button href={project.live}>
              <FaExternalLinkAlt />
              Live Demo
            </Button>
          )}

          <Button
            variant="outline"
            href={project.github}
          >
            <FaGithub />
            GitHub
          </Button>

        </div>

      </div>

    </Card>
  );
}
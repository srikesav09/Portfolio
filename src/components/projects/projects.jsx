import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";

import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28">

      <Container>

        <SectionTitle
          subtitle="Projects"
          title="Things I've Built"
        />

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          A collection of applications that demonstrate my experience in
          full-stack development, backend engineering, and embedded systems.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </Container>

    </section>
  );
}
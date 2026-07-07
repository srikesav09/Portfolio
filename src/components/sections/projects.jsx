import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

import projects from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <Container>

        <SectionTitle
          subtitle="Projects"
          title="Featured Projects"
        />

        <p className="mx-auto mb-20 max-w-2xl text-center text-slate-400">
          A selection of projects that demonstrate my experience
          in building full-stack applications, backend systems,
          and embedded solutions.
        </p>

        <div className="space-y-32">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
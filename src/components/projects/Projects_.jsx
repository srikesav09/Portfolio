import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "./ProjectCard";

import projects from "../../data/projects_data";
import SectionWrapper from "../common/SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper>
      <section id="projects" className="py-28">

        <Container>

          <SectionTitle
            subtitle="Projects"
            title="What I've Built"
          />

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            A collection of projects that reflect my journey in full-stack development,
    backend engineering, cloud computing, and problem-solving.
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
    </SectionWrapper>
  );
}

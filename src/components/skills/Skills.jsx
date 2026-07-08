import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import SkillCategory from "./SkillCategory";

import skills from "../../data/skills";
import SectionWrapper from "../common/SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper>
      <section id="skills" className="py-28">
        <Container>

          <SectionTitle
            subtitle="Tech Stack"
            title="Technologies I Use"
          />

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            I enjoy building modern web applications using these technologies
            across frontend, backend, databases, and cloud.
          </p>

          <div className="space-y-12">
            {skills.map((group) => (
              <SkillCategory
                key={group.category}
                category={group.category}
                items={group.items}
              />
            ))}
          </div>

        </Container>
      </section>
    </SectionWrapper>
  );
}
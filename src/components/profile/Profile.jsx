import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProfileCard from "./ProfileCard";

import profile from "../../data/profile";
import SectionWrapper from "../common/SectionWrapper";

export default function Profile() {
  return (
    <SectionWrapper>
      <section
        id="profile"
        className="py-28"
      >
        <Container>

          <SectionTitle
            subtitle="Profile"
            title="Beyond the Code"
          />

          <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
            A quick overview of my education, current learning,
            career goals, and the opportunities I'm looking for.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {profile.map((card) => (
              <ProfileCard
                key={card.title}
                {...card}
              />
            ))}
          </div>

        </Container>
      </section>
    </SectionWrapper>
  );
}
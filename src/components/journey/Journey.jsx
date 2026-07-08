import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TimelineItem from "./TimelineItem";

import journey from "../../data/journey";
import SectionWrapper from "../common/SectionWrapper";

export default function Journey() {
  return (
    <SectionWrapper>
      <section
        id="journey"
        className="py-28"
      >
        <Container>

          <SectionTitle
            subtitle="Journey"
            title="My Journey"
          />

          <div className="max-w-3xl mx-auto">

            {journey.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                last={index === journey.length - 1}
              />
            ))}

          </div>

        </Container>
      </section>
    </SectionWrapper>
  );
}
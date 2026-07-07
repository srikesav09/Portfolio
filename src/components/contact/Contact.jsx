import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import ContactCard from "./ContactCard";

import contact from "../../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <Container>

        <SectionTitle
          subtitle="Contact"
          title="Let's Connect"
        />

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          I'm always open to internship opportunities, collaborations,
          and conversations about software engineering.
        </p>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {contact.map((item) => (
            <ContactCard
              key={item.id}
              {...item}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/_RESUME_SRIKESAV.pdf">
            Download Resume
          </Button>

          <Button
            variant="outline"
            href="mailto:srikesav77@gmail.com"
          >
            Send Email
          </Button>
        </div>

      </Container>
    </section>
  );
}
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import CertificateCard from "./CertificateCard";

import certifications from "../../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <Container>

        <SectionTitle
          subtitle="Achievements"
          title="Certifications"
        />

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Certifications that demonstrate my commitment to continuous learning and professional growth.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              {...certificate}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
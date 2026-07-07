import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import DashboardCard from "../ui/DashboardCard";

import dashboard from "../../data/dashboard";

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="py-28"
    >
      <Container>

        <SectionTitle
          subtitle="Overview"
          title="Developer Dashboard"
        />

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          A quick overview of my education, current learning, career goals,
          and what I'm actively working on.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          {dashboard.map((card) => (
            <DashboardCard
              key={card.title}
              {...card}
            />
          ))}

        </div>

        {/* Current Work */}
        <div className="mt-8">
          <DashboardCard
            title="Currently Building"
            icon="🚀"
            items={[
              "Portfolio Website",
              "AWS Learning Projects",
              "Data Structures & Algorithms Practice",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
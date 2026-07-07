import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import StatCard from "./StatCard";

import stats from "../../data/stats";

export default function Stats() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          subtitle="Stats"
          title="Quick Highlights"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat)=>{
            return (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
            />
          )})}
        </div>
      </Container>
    </section>
  );
}
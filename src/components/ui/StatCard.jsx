import Card from "./Card";

export default function StatCard({ value, label }) {
  return (
    <Card className="text-center py-8">
      <h3 className="text-4xl font-bold text-blue-400">
        {value}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>
    </Card>
  );
}
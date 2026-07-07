import Card from "./Card";

export default function DashboardCard({ title, icon, items }) {
  return (
    <Card className="h-full">

      <div className="flex items-center gap-3 mb-6">

        <span className="text-3xl">
          {icon}
        </span>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

      </div>

      <div className="space-y-3">
  {items.map((item) => (
    <div
      key={item}
      className="flex items-center gap-3 rounded-lg bg-slate-800/50 px-3 py-2"
    >
      <span className="h-2 w-2 rounded-full bg-blue-400"></span>
      <p className="text-slate-300">{item}</p>
    </div>
  ))}
</div>

    </Card>
  );
}
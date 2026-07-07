import Card from "../common/Card";

export default function ProfileCard({ title, icon, items }) {
  return (
    <Card className="h-full">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-3xl">{icon}</span>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-lg bg-slate-900 px-4 py-3"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>

            <span className="text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
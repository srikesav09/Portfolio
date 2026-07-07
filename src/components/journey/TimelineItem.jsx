export default function TimelineItem({
  year,
  title,
  description,
  last = false,
}) {
  return (
    <div className="relative pl-10 pb-10">

      {!last && (
        <div className="absolute left-3 top-5 h-full w-0.5 bg-slate-700"></div>
      )}

      <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blue-500 border-4 border-slate-950"></div>

      <p className="text-blue-400 font-semibold">
        {year}
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-400 leading-7">
        {description}
      </p>

    </div>
  );
}
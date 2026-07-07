export default function BowserMockup({
  image, title
}){
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-800 px-4 py-3">
        <span className = "h-3 w-3 rounded-full bg-red-500"></span>
        <span className = "h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className = "h-3 w-3 rounded-full bg-green-500"></span>
      </div>

      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
    </div>
  );
}
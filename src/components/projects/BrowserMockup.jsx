export default function BrowserMockup({ image, title }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <div className="h-2 w-36 rounded-full bg-slate-700"></div>

        <div className="w-6"></div>

      </div>

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

    </div>
  );
}
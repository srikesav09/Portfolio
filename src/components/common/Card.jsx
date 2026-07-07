export default function Card({
  children,
  className="",
  hover = true,
}) {
  return (
    <div
      className={
        `
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-6
          shadow-lg
          transition-all
          duration-300

          ${
            hover
              ? "hover:-translate-y-2 hover: border-blue-500 hover:shadow-blue-500/20"
              : ""
          }

          ${className}
          
        `
      }>
      {children}
    </div>
  );
}
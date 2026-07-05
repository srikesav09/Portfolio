export default function Button({
  children,
  variant = "primary",
  onClick,
  href
}) {

  const base = 
  "px-6 py-3 rounded-2xl font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white",
    
      secondary:
        "border border-slate-600 hover: border-blue-500 hover: text-blue-400",

      outline:
        "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
  };

  if(href){
    return (
      <a
        href={href}
        className={`$(base) $(styles[variant])`}>
          {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`$(base) $(styles[variant])`}
      >
        {children}
      </button>
  );
}
export default function Button({
  children,
  variant = "primary",
  onClick,
  href
}) {

  const base =
  "inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 cursor-pointer hover:scale-105";

  const styles = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600",
    
      secondary:
        "border border-slate-400 hover:border-blue-500 hover:text-blue-500",

      outline:
        "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
  };

  if(href){
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]}`}>
          {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
      >
        {children}
      </button>
  );
}


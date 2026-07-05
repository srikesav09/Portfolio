export default function SectionTitle({
  title,
  subtitle,
  center=true,
}) {
  return (
    <div
      className={
        `
          mb-16
          ${
            center ? "text-center" : "text-left"
          }
        `
      }
    >
      
      <h2
        className={
          `
            text-3xl
            md: text-5xl
            font-bold
          `
        }
      >
        {title}
      </h2>

      <p
        className={
          `
          text-blue-400
            font-medium
            tracking-widest
            uppercase
          `
        }
      >
        {subtitle}
      </p>

    </div>
  );
}
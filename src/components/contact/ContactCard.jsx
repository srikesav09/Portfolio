import Card from "../common/Card";

export default function ContactCard({ title, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      <Card className="transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
        <p className="text-sm uppercase tracking-wider text-slate-500">
          {title}
        </p>

        <p className="mt-3 text-lg font-medium break-all">
          {value}
        </p>
      </Card>
    </a>
  );
}
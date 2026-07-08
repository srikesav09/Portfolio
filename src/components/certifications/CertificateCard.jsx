import Card from "../common/Card";
import { FaArrowRight } from "react-icons/fa";

export default function CertificateCard({
  title,
  issuer,
  score,
  icon,
  link,
}) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-400">
        {issuer}
      </p>

      <p className="mt-4 font-medium text-blue-400">
        {score}
      </p>

      {link !== "#" && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 transition-colors"
        >
          View Certificate
          <FaArrowRight aria-hidden="true" className="text-sm" />
        </a>
      )}
    </Card>
  );
}
export default function SkillBadge({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-slate-800
      bg-slate-900
      px-4
      py-3
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500
      hover:shadow-lg
      hover:shadow-blue-500/20
    "
    >
      {Icon && <Icon className="text-xl text-blue-400" />}

      <span className="font-medium">
        {skill.name}
      </span>
    </div>
  );
}
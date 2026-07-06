import SkillBadge from "./SkillBadge";

export default function SkillCategory({ category, items }) {
  return (
    <div className="space-y-5">
      <h3 className="text-2xl font-semibold">
        {category}
      </h3>
      <div className="flex flex-wrap gap-4">
        {items.map((skill) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}
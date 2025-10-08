import { SkillCard } from "./SkillCard";
import type { ICategory } from "@/types";

type SkillCardViewProps = {
  skills: ICategory[];
};

export function SkillCardView({ skills }: SkillCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
}

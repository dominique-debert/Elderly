import type { ICategory } from '@/@types/ICategory';
import { SkillCard } from './SkillCard';

type SkillCardViewProps = {
  skillCategories: ICategory[];
};

export function SkillCardView({ skillCategories }: SkillCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {skillCategories.map((skillCategory) => (
        <SkillCard key={skillCategory.id} skillCategory={skillCategory} />
      ))}
    </div>
  );
}

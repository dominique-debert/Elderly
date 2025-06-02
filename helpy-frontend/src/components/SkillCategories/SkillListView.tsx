import {ICategory} from '@/@types/ICategory'
import SkillListItem from './SkillListItem';

type SkillListViewProps = {
  skillCategories: ICategory[];
};

export function SkillListView({ skillCategories }: SkillListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {skillCategories?.map((skillCategory) => (
        <SkillListItem key={ skillCategory.id } skillCategory={ skillCategory }/>
      ))}
    </ul>
  );
}

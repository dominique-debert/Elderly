import {ICategory} from '@/@types/ICategory'
import SkillListItem from './SkillListItem';

type SkillListViewProps = {
  skills: ICategory[];
};

export function SkillListView({ skills }: SkillListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {skills?.map((skill) => (
        <SkillListItem key={skill.id} skill={skill}/>
      ))}
    </ul>
  );
}

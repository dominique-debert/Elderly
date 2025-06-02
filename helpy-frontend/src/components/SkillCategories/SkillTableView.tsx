import type { ICategory } from '@/@types/ICategory'
import SkillTableRow from "./SkillTableRow";

export function SkillTableView({ skillCategories }: { skillCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {skillCategories?.map((skillCategory) => (
          <SkillTableRow key={skillCategory.id} skillCategory={skillCategory}/>
        ))}
      </tbody>
    </table>
  );
}
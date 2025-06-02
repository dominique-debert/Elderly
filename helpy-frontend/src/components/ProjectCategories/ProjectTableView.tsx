import type { ICategory } from '@/@types/ICategory'
import ProjectTableRow from "./ProjectTableRow";

export function ProjectTableView({ projectCategories }: { projectCategories: ICategory[] }) {   
  return (
    <table className="table w-full table-zebra">
      <thead className='text-semibold'>
        <tr>
          <th className="w-1/3">Titre</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {projectCategories?.map((projectCategory) => (
          <ProjectTableRow key={projectCategory.id} projectCategory={projectCategory}/>
        ))}
      </tbody>
    </table>
  );
}
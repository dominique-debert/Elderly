import {ICategory} from '@/@types/ICategory'
import ProjectListItem from './ProjectListItem';

type ProjectListViewProps = {
  projectCategories: ICategory[];
};

export function ProjectListView({ projectCategories }: ProjectListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {projectCategories?.map((projectCategory) => (
        <ProjectListItem key={ projectCategory.id } projectCategory={ projectCategory }/>
      ))}
    </ul>
  );
}

import type { ICategory } from '@/@types/ICategory';
import { ProjectCard } from './ProjectCard';

type ProjectCardViewProps = {
  projectCategories: ICategory[];
};

export function ProjectCardView({ projectCategories }: ProjectCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {projectCategories.map((projectCategory) => (
        <ProjectCard key={projectCategory.id} projectCategory={projectCategory} />
      ))}
    </div>
  );
}

import { ICategory } from "@/types/ICategory";
import { ProjectListItem } from "@/components";

type ProjectListViewProps = {
  projects: ICategory[];
};

export function ProjectListView({ projects }: ProjectListViewProps) {
  return (
    <ul className="space-y-2 mt-4">
      {projects?.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </ul>
  );
}

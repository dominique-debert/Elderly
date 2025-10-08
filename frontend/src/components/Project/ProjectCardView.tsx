import type { ICategory } from "@/types";
import { ProjectCard } from "@/components";

type ProjectCardViewProps = {
  projects: ICategory[];
};

export function ProjectCardView({ projects }: ProjectCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

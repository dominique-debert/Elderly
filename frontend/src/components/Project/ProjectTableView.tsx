import type { ICategory } from "@/types";
import {
  ProjectTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function ProjectTableView({ projects }: { projects: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects?.map((project) => (
          <ProjectTableRow key={project.id} project={project} />
        ))}
      </TableBody>
    </Table>
  );
}

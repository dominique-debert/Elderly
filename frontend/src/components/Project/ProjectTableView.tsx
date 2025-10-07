import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ProjectTableRow from "./ProjectTableRow";
import type { ICategory } from "@/@types";

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

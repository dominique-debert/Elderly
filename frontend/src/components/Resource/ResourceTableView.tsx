import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ResourceTableRow from "./ResourceTableRow";
import type { ICategory } from "@/@types";

export function ResourceTableView({ resources }: { resources: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources?.map((resource) => (
          <ResourceTableRow key={resource.id} resource={resource} />
        ))}
      </TableBody>
    </Table>
  );
}

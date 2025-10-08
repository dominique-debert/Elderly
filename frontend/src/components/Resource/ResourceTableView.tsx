import type { ICategory } from "@/types";

import {
  ResourceTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

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

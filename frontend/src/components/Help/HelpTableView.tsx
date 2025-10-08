import type { ICategory } from "@/types";

import {
  HelpTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function HelpTableView({ helps }: { helps: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {helps?.map((help) => (
          <HelpTableRow key={help.id} help={help} />
        ))}
      </TableBody>
    </Table>
  );
}

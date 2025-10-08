import type { ICategory } from "@/types";

import {
  BadgeTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function BadgeTableView({ badges }: { badges: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {badges?.map((badge) => (
          <BadgeTableRow key={badge.id} badge={badge} />
        ))}
      </TableBody>
    </Table>
  );
}

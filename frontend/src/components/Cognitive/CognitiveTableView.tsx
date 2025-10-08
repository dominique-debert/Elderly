import type { ICategory } from "@/types";

import {
  CognitiveTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function CognitiveTableView({
  cognitives,
}: {
  cognitives: ICategory[];
}) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cognitives?.map((cognitive) => (
          <CognitiveTableRow key={cognitive.id} cognitive={cognitive} />
        ))}
      </TableBody>
    </Table>
  );
}

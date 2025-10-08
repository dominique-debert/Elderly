import type { ICategory } from "@/types";
import {
  ProgramTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function ProgramTableView({ programs }: { programs: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {programs?.map((program) => (
          <ProgramTableRow key={program.id} program={program} />
        ))}
      </TableBody>
    </Table>
  );
}

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ForumTableRow from "./ForumTableRow";
import type { ICategory } from "@/@types";

export function ForumTableView({ forums }: { forums: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {forums?.map((forum) => (
          <ForumTableRow key={forum.id} forum={forum} />
        ))}
      </TableBody>
    </Table>
  );
}

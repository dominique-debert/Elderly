import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import UrbanIssueTableRow from "./UrbanIssueTableRow";
import type { ICategory } from "@/@types";

export function UrbanIssueTableView({
  urbanIssues,
}: {
  urbanIssues: ICategory[];
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
        {urbanIssues?.map((urbanIssue) => (
          <UrbanIssueTableRow key={urbanIssue.id} urbanIssue={urbanIssue} />
        ))}
      </TableBody>
    </Table>
  );
}

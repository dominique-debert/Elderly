import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import WellnessTableRow from "./WellnessTableRow";
import type { ICategory } from "@/@types";

export function WellnessTableView({
  wellnessCategories,
}: {
  wellnessCategories: ICategory[];
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
        {wellnessCategories?.map((wellnessCategory) => (
          <WellnessTableRow
            key={wellnessCategory.id}
            wellnessCategory={wellnessCategory}
          />
        ))}
      </TableBody>
    </Table>
  );
}

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import ActivityTableRow from "./ActivityTableRow";
import type { ICategory } from "@/@types";

export function ActivityTableView({ activities }: { activities: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activities?.map((activity) => (
          <ActivityTableRow key={activity.id} activity={activity} />
        ))}
      </TableBody>
    </Table>
  );
}

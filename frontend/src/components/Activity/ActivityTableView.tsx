import type { ICategory } from "@/types";
import {
  ActivityTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

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

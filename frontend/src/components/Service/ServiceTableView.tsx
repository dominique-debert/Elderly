import type { ICategory } from "@/types";
import {
  ServiceTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function ServiceTableView({ services }: { services: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services?.map((service) => (
          <ServiceTableRow key={service.id} service={service} />
        ))}
      </TableBody>
    </Table>
  );
}

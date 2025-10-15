import { type ICategory, type ETabKey } from "@/types";
import {
  CategoryTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

type CategoryTableViewProps = {
  categories: ICategory[];
  tabKey: ETabKey;
};

export function CategoryTableView({
  categories,
  tabKey,
}: CategoryTableViewProps) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.map((category) => (
          <CategoryTableRow
            key={category.id}
            category={category}
            tabKey={tabKey}
          />
        ))}
      </TableBody>
    </Table>
  );
}

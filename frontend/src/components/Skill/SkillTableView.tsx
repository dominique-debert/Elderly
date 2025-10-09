import type { ICategory } from "@/types";
import {
  SkillTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function SkillTableView({ skills }: { skills: ICategory[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {skills?.map((skill) => (
          <SkillTableRow key={skill.id} skill={skill} />
        ))}
      </TableBody>
    </Table>
  );
}

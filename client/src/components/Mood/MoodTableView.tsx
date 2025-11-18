import { IMood } from "@/types/IMood";

import {
  MoodTableRow,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components";

export function MoodTableView({ moods }: { moods: IMood[] }) {
  return (
    <Table className="table w-full table-zebra">
      <TableHeader className="text-semibold">
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Valence</TableHead>
          <TableHead className="text-center">Intensité</TableHead>
          <TableHead className="text-center">Date de création</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {moods?.map((mood) => (
          <MoodTableRow key={mood.id} mood={mood} />
        ))}
      </TableBody>
    </Table>
  );
}

import { IMood } from '@/@types/IMood'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '../ui/table';
import MoodTableRow from "./MoodTableRow";

export function MoodTableView({ moods }: { moods: IMood[] }) {   
  return (
    <Table className="table w-full table-zebra mt-10">
      <TableHeader className='text-semibold'>
        <TableRow>
          <TableHead>Titre</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Valence</TableHead>
          <TableHead className='text-center'>Intensité</TableHead>
          <TableHead className='text-center'>Date de création</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {moods?.map((mood) => (
          <MoodTableRow key={mood.id} mood={mood}/>
        ))}
      </TableBody>
    </Table>
  );
}
import { ICategory } from "@/types/ICategory";
import ProgramListItem from "./ProgramListItem";

type ProgramListViewProps = {
  programs: ICategory[];
};

export function ProgramListView({ programs }: ProgramListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {programs?.map((program) => (
        <ProgramListItem key={program.id} program={program} />
      ))}
    </ul>
  );
}

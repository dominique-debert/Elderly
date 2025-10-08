import { ProgramCard } from "./ProgramCard";
import type { ICategory } from "@/types";

type ProgramCardViewProps = {
  programs: ICategory[];
};

export function ProgramCardView({ programs }: ProgramCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}

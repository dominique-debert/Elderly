import { HelpCard } from "./HelpCard";
import type { ICategory } from "@/types";

type HelpCardViewProps = {
  helps: ICategory[];
};

export function HelpCardView({ helps }: HelpCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {helps.map((help) => (
        <HelpCard key={help.id} help={help} />
      ))}
    </div>
  );
}

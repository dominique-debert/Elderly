import type { ICategory } from "@/@types/ICategory";
import { HelpCard } from "./HelpCard";

type HelpCardViewProps = {
  helpCategories: ICategory[];
};

export function HelpCardView({ helpCategories }: HelpCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {helpCategories.map((helpCategory) => (
        <HelpCard key={helpCategory.id} helpCategory={helpCategory} />
      ))}
    </div>
  );
}

import { CognitiveCard } from "./CognitiveCard";
import type { ICategory } from "@/@types";

type CognitiveCardViewProps = {
  cognitives: ICategory[];
};

export function CognitiveCardView({ cognitives }: CognitiveCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {cognitives.map((cognitive) => (
        <CognitiveCard key={cognitive.id} cognitive={cognitive} />
      ))}
    </div>
  );
}

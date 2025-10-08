import { ICategory } from "@/types/ICategory";
import { CognitiveListItem } from "@/components";

type CognitiveListViewProps = {
  cognitives: ICategory[];
};

export function CognitiveListView({ cognitives }: CognitiveListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {cognitives?.map((cognitive) => (
        <CognitiveListItem key={cognitive.id} cognitive={cognitive} />
      ))}
    </ul>
  );
}

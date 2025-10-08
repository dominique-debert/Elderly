import { IMood } from "@/types/IMood";
import { MoodCard } from "./MoodCard";

type MoodCardViewProps = {
  moods: IMood[];
};

export function MoodCardView({ moods }: MoodCardViewProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {moods.map((mood) => (
        <MoodCard key={mood.id} mood={mood} />
      ))}
    </div>
  );
}

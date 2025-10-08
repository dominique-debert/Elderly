import { IMood } from "@/types/IMood";
import MoodListItem from "./MoodListItem";

export function MoodListView({ moods }: { moods: IMood[] }) {
  return (
    <ul className="space-y-2 mt-10">
      {moods?.map((mood) => (
        <MoodListItem key={mood.id} mood={mood} />
      ))}
    </ul>
  );
}

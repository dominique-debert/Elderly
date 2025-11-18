import { IMood } from "@/types/IMood";
import { MoodListItem } from "@/components";

export function MoodListView({ moods }: { moods: IMood[] }) {
  return (
    <ul className="space-y-2">
      {moods?.map((mood) => (
        <MoodListItem key={mood.id} mood={mood} />
      ))}
    </ul>
  );
}

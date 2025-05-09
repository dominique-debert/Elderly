import { IMood } from '../../@types/IMood';

type MoodCardProps = {
  mood: IMood;
};

export function MoodCard({ mood }: MoodCardProps) {

  return (
    <div
      className="rounded-lg p-4 shadow-lg"
      style={{ borderLeft: `10px solid ${mood.color}`}}
    >
      <div className="flex items-center w-full text-xl font-bold">
        {mood.name}
      </div>
      <p className="text-sm text-gray-600">
        {mood.valence} · intensité {mood.intensity}/5
      </p>
      {mood.description && <p className="mt-2">{mood.description}</p>}
    </div>
  );
}

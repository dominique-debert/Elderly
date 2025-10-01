import type { ICategory } from '@/@types/ICategory';
import { HelpCard } from './HelpCard';

type HelpCardViewProps = {
  helps?: ICategory[];
};

export function HelpCardView({ helps = [] }: HelpCardViewProps) {
  if (!helps || helps.length === 0) {
    return <div className="text-gray-500 mt-6">Aucune aide disponible pour le moment</div>;
  }

  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {helps.map((help) => (
        <HelpCard key={help.id} help={help} />
      ))}
    </div>
  );
}

import type { ICategory } from '@/@types/ICategory';
import { ProgramCard } from './ProgramCard';

type ProgramCardViewProps = {
  programCategories: ICategory[];
};

export function ProgramCardView({ programCategories }: ProgramCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {programCategories.map((programCategory) => (
        <ProgramCard key={programCategory.id} programCategory={programCategory} />
      ))}
    </div>
  );
}

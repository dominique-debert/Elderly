import {ICategory} from '@/@types/ICategory'
import ProgramListItem from './ProgramListItem';

type ProgramListViewProps = {
  programCategories: ICategory[];
};

export function ProgramListView({ programCategories }: ProgramListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {programCategories?.map((programCategory) => (
        <ProgramListItem key={ programCategory.id } programCategory={ programCategory }/>
      ))}
    </ul>
  );
}

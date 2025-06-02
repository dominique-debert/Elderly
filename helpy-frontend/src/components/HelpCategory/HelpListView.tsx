import {ICategory} from '@/@types/ICategory'
import HelpListItem from './HelpListItem';

type HelpListViewProps = {
  helpCategories: ICategory[];
};

export function HelpListView({ helpCategories }: HelpListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {helpCategories?.map((helpCategory) => (
        <HelpListItem key={ helpCategory.id } helpCategory={ helpCategory }/>
      ))}
    </ul>
  );
}

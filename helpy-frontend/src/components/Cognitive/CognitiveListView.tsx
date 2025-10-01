import { ICategory } from '@/@types/ICategory'
import CognitiveListItem from './CognitiveListItem';

type CognitiveListViewProps = {
  cognitives: ICategory[];
};

export default function CognitiveListView({ cognitives }: CognitiveListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {cognitives?.map((cognitive) => (
        <CognitiveListItem key={cognitive.id} cognitive={cognitive}/>
      ))}
    </ul>
  );
}

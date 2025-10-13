import { ICategory } from "@/types/ICategory";
import { HelpListItem } from "@/components";

type HelpListViewProps = {
  helps: ICategory[];
};

export function HelpListView({ helps }: HelpListViewProps) {
  return (
    <ul className="space-y-2 mt-4">
      {helps?.map((help) => (
        <HelpListItem key={help.id} help={help} />
      ))}
    </ul>
  );
}

import { type ICategory, type ETabKey } from "@/types";
import { CategoryListItem } from "./CategoryListItem";

type CategoryListViewProps = {
  categories: ICategory[];
  tabKey: ETabKey;
};

export function CategoryListView({
  categories,
  tabKey,
}: CategoryListViewProps) {
  return (
    <ul className="flex flex-col gap-2">
      {categories.map((category) => (
        <CategoryListItem
          key={category.id}
          category={category}
          tabKey={tabKey}
        />
      ))}
    </ul>
  );
}

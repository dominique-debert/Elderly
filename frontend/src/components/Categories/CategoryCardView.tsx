import { type ICategory, type ETabKey } from "@/types";
import { CategoryCardItem } from "./CategoryCardItem";

type CategoryCardViewProps = {
  categories: ICategory[];
  tabKey: ETabKey;
};

export function CategoryCardView({
  categories,
  tabKey,
}: CategoryCardViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {categories.map((category) => (
        <CategoryCardItem
          key={category.id}
          category={category}
          tabKey={tabKey}
        />
      ))}
    </div>
  );
}

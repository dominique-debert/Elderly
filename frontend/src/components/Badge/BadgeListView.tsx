import { ICategory } from "@/types/ICategory";

import { BadgeListItem } from "@/components";

type BadgeListViewProps = {
  badges: ICategory[];
};

export function BadgeListView({ badges }: BadgeListViewProps) {
  return (
    <ul className="space-y-2 mt-10">
      {badges?.map((badge) => (
        <BadgeListItem key={badge.id} badge={badge} />
      ))}
    </ul>
  );
}

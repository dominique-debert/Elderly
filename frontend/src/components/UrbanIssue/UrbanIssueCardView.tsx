import { UrbanIssueCard } from "./UrbanIssueCard";
import type { ICategory } from "@/types";

type UrbanIssueCardViewProps = {
  urbanIssues: ICategory[];
};

export function UrbanIssueCardView({ urbanIssues }: UrbanIssueCardViewProps) {
  return (
    <div className="grid grid-cols-2 p-0 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
      {urbanIssues.map((urbanIssue) => (
        <UrbanIssueCard key={urbanIssue.id} urbanIssue={urbanIssue} />
      ))}
    </div>
  );
}

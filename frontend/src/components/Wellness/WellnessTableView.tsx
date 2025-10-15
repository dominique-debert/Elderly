import { ICategory } from "@/types";
import { WellnessTableRow } from "./WellnessTableRow";

type WellnessTableViewProps = {
  wellnessCategories: ICategory[];
};

export function WellnessTableView({
  wellnessCategories,
}: WellnessTableViewProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wellnessCategories.map((wellness) => (
            <WellnessTableRow key={wellness.id} wellness={wellness} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

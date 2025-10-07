import type { ICategory } from "@/@types";

export interface IUpdateCategoryState {
  categoryToUpdate: ICategory | null;
  open: (category: ICategory) => void;
  close: () => void;
}

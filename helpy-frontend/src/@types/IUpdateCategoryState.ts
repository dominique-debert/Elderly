import type { ICategory } from './ICategory';

export interface IUpdateCategoryState {
  categoryToUpdate: ICategory | null;
  open: (category: ICategory) => void;
  close: () => void;
}

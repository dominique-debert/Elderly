import type { ICategory } from './ICategory';

export interface ICategoryModalState {
  isOpen: boolean;
  isEdit: boolean;
  categoryToEdit: ICategory | null;
  openCreate: () => void;
  openEdit: (category: ICategory) => void;
  close: () => void;
}
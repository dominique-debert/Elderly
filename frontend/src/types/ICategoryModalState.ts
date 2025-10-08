import type { ICategory } from "@/types";

export interface ICategoryModalState {
  isOpen: boolean;
  isEdit: boolean;
  categoryToEdit: ICategory | null;
  openCreate: () => void;
  openEdit: (category: ICategory) => void;
  close: () => void;
}

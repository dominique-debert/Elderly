import type { ICategory } from './ICategory';

export interface ICategoryState {
  selectedCategory: ICategory | null;
  isMenuOpen: boolean;
  isUpdateModalOpen: boolean;
  isDeleteModalOpen: boolean;
  menuPosition: { top: number; left: number } | null;  // Ajout de la position
  openMenu: (category: ICategory, position: { top: number; left: number }) => void;
  closeMenu: () => void;
  openUpdateModal: () => void;
  closeUpdateModal: () => void;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
}

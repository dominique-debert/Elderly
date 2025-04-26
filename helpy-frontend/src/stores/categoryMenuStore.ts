import { create } from 'zustand';
import { ICategoryState } from '../@types/ICategoryState';
import { ICategory } from '../@types/ICategory';

export const useCategoryMenuStore = create<ICategoryState>((set) => ({
  selectedCategory: null,
  isMenuOpen: false,
  isUpdateModalOpen: false,
  isDeleteModalOpen: false,
  menuPosition: null,  // Ajout de la position

  openMenu: (category: ICategory, position: { top: number; left: number }) => {
    set({ selectedCategory: category, menuPosition: position, isMenuOpen: true });
  },
  closeMenu: () => set({ isMenuOpen: false, selectedCategory: null, menuPosition: null }),

  openUpdateModal: () => set({ isUpdateModalOpen: true }),
  closeUpdateModal: () => set({ isUpdateModalOpen: false }),

  openDeleteModal: () => set({ isDeleteModalOpen: true }),
  closeDeleteModal: () => set({ isDeleteModalOpen: false }),
}));

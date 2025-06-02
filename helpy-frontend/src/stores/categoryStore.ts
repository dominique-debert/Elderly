import { create } from 'zustand';
import type { ICategory } from '../@types/ICategory';

interface CategoryState {
  selectedCategory: ICategory | null;
  isMenuOpen: boolean;
  isUpdateModalOpen: boolean;
  isDeleteModalOpen: boolean;
  openMenu: (category: ICategory, position: { top: number; left: number }) => void;
  closeMenu: () => void;
  openUpdateModal: () => void;
  closeUpdateModal: () => void;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: null,
  isMenuOpen: false,
  isUpdateModalOpen: false,
  isDeleteModalOpen: false,

  openMenu: (category) => set({ selectedCategory: category, isMenuOpen: true }),
  closeMenu: () => set({ selectedCategory: null, isMenuOpen: false }),
  openUpdateModal: () => set({ isUpdateModalOpen: true }),
  closeUpdateModal: () => set({ isUpdateModalOpen: false }),
  openDeleteModal: () => set({ isDeleteModalOpen: true }),
  closeDeleteModal: () => set({ isDeleteModalOpen: false }),
}));

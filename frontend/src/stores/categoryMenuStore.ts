import { create } from "zustand";
import type { ICategory, ICategoryState } from "@/@types";

export const useCategoryMenuStore = create<ICategoryState>((set) => ({
  selectedCategory: null,
  isMenuOpen: false,
  isUpdateModalOpen: false,
  isDeleteModalOpen: false,
  menuPosition: null, // Ajout de la position

  openMenu: (category: ICategory) => {
    set({
      selectedCategory: category,
      isMenuOpen: true,
    });
  },
  closeMenu: () => set({ isMenuOpen: false, selectedCategory: null }),

  openUpdateModal: () => set({ isUpdateModalOpen: true }),
  closeUpdateModal: () => set({ isUpdateModalOpen: false }),

  openDeleteModal: () => set({ isDeleteModalOpen: true }),
  closeDeleteModal: () => set({ isDeleteModalOpen: false }),
}));

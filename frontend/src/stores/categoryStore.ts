import { create } from "zustand";
import { ICategoryState } from "@/@types";

export const useCategoryStore = create<ICategoryState>((set) => ({
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

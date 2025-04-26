// src/store/modalStore.ts

import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  selectedCategoryId: string | null;
  openModal: (categoryId: string) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  selectedCategoryId: null,
  openModal: (categoryId: string) => set({ isModalOpen: true, selectedCategoryId: categoryId }),
  closeModal: () => set({ isModalOpen: false, selectedCategoryId: null }),
}));

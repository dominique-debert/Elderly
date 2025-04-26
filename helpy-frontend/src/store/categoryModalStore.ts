import { create } from 'zustand';
import type CategoryModalStore from '../@types/ICategoryModalStore';

const useCategoryModalStore = create<CategoryModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useCategoryModalStore;

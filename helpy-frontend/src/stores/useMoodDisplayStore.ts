// src/stores/useMoodDisplayStore.ts
import { create } from 'zustand';

type MoodDisplayMode = 'card' | 'list' | 'table';

interface MoodDisplayState {
  mode: MoodDisplayMode;
  setMode: (mode: MoodDisplayMode) => void;
}

export const useMoodDisplayStore = create<MoodDisplayState>((set) => ({
  mode: 'card',
  setMode: (mode) => set({ mode }),
}));

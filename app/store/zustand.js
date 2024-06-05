import { create } from "zustand";

// Create the Zustand store
export const useToggle = create((set) => ({
  toggle: false, // Initial state
  bubbleActive: "",
  showChatRoom:false,
  setToggle: () => set((state) => ({ toggle: !state.toggle })),
  setBubbleActive: (value) => set({ bubbleActive: value }),
  setShowChatRoom: () => set((state) => ({ showChatRoom: !state.showChatRoom })),
}));

import { create } from "zustand";

// Create the Zustand store
export const useToggle = create((set) => ({
  toggle: false, // Initial state
  chatToggle: false, // Initial state
  taskToggle: false, // Initial state
  bubbleActive: "",
  setToggle: () => set((state) => ({ toggle: !state.toggle })),
  setChatToggle: () => set((state) => ({ chatToggle: !state.chatToggle })),
  setTaskToggle: () => set((state) => ({ taskToggle: !state.taskToggle })),
  setBubbleActive: (value) => set({ bubbleActive: value }),
}));

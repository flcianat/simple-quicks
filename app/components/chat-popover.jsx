"use client";

import { useToggle } from "../store/zustand";

export default function ChatPopover() {
  const {
    toggle,
    setToggle,
    chatToggle,
    setChatToggle,
    taskToggle,
    setTaskToggle,
    bubbleActive,
    setBubbleActive,
  } = useToggle();

  return (
    <div className={bubbleActive === "chat" ? "block" : "hidden"}>
      <div className="bg-white w-[500px] h-[470px] fixed right-0 mr-5 bottom-[100px] rounded-[2px]">
        <h1>chat</h1>
      </div>
    </div>
  );
}

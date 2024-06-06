"use client";
import { useEffect, useState } from "react";
import { BASE } from "../api/api-call";
import ChatPopover from "./chat-popover";
import Menu from "./menu";
import TaskPopover from "./task-popover";
import ChatRoom from "./chat-room";
import { useToggle } from "../store/zustand";

export default function Main() {
  const { bubbleActive, chatType } = useToggle();
  const [allTask, setAllTask] = useState([]);
  const [allChat, setAllChat] = useState([]);

  const getAllChatList = async () => {
    const res = await BASE({ method: "get", type: "chatList" });
    setAllChat(res.data);
  };

  useEffect(() => {
    getAllChatList();
  }, []);

  return (
    <div className="p-5">
      <TaskPopover />

      {bubbleActive === "chatroom" ? (
        <ChatRoom type={chatType} />
      ) : (
        <ChatPopover data={allChat} />
      )}

      <Menu />
    </div>
  );
}

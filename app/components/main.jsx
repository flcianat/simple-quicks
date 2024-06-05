"use client";
import { useEffect, useState } from "react";
import { BASE } from "../api/api-call";
import ChatPopover from "./chat-popover";
import Menu from "./menu";
import TaskPopover from "./task-popover";
import ChatRoom from "./chat-room";
import { useToggle } from "../store/zustand";

export default function Main() {
  const { bubbleActive, setBubbleActive } = useToggle();
  const [allTask, setAllTask] = useState([]);

  const getAllTask = async () => {
    const res = await BASE({ method: "get", type: "tasks" });
    setAllTask(res.data);
    console.log(res);
  };

  useEffect(() => {
    getAllTask();
  }, []);

  return (
    <div className="p-5">
      {/* TODO : add loading data state */}
      <TaskPopover data={allTask} />

      {/* TODO : add loading data state */}
      {bubbleActive === "chatroom" ? <ChatRoom /> : <ChatPopover />}

      <Menu />
    </div>
  );
}

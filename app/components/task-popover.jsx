"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useToggle } from "../store/zustand";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TaskCard from "./task-card";
import NewTask from "./new-task";

export default function TaskPopover({ data }) {
  const { bubbleActive } = useToggle();
  const [newTask, setNewTask] = useState(false);

  return (
    <div className={bubbleActive === "task" ? "block" : "hidden"}>
      <div className="bg-white w-[600px] h-[520px] fixed right-0 mr-5 bottom-[100px] rounded-[2px] p-5">
        <div className="grid grid-cols-2 bg-white ">
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="border border-primary-gray-200"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="flex justify-between place-items-center gap-3"
                >
                  My Tasks <ChevronDown size={15} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] border border-primary-gray-200">
                <DropdownMenuItem>Personal Errands</DropdownMenuItem>
                <DropdownMenuSeparator className="border-[0.1px] border-primary-gray-200" />
                <DropdownMenuItem>Urgent To-Do</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex justify-end">
            <Button
              className="bg-primary-blue-100 hover:bg-primary-blue-200 font-bold"
              size="sm"
              onClick={() => setNewTask(<NewTask />)}
            >
              New Task
            </Button>
          </div>
        </div>

        <div className=" overflow-auto h-[450px] w-full px-2">
          {data.map((x) => {
            return <TaskCard data={x} />;
          })}

          {newTask}
        </div>
      </div>
    </div>
  );
}

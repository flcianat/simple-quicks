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
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import TaskCard from "./task-card";
import NewTask from "./new-task";
import { BASE } from "../api/api-call";
import { toast } from "sonner";

export default function TaskPopover() {
  const { bubbleActive } = useToggle();
  const [newTask, setNewTask] = useState(false);
  const [allTask, setAllTask] = useState([]);
  const [selectedTask, setSelectedTask] = useState("my task");

  const getAllTask = async () => {
    const res = await BASE({ method: "get", type: "tasks" });
    setAllTask(res.data);
  };

  const deleteTask = async (id) => {
    const res = await BASE({ method: "get", type: `tasks/${id}` });
    if (res.status) {
      setAllTask((prevTasks) => prevTasks.filter((task) => task.id !== id));

      toast.success("Task has been removed");
    } else {
      console.error(`Failed to delete task with id ${id}.`);
    }
  };

  const taskOption = [
    { label: "my task", value: "my task" },
    { label: "personal errands", value: "personal errands" },
    { label: "urgent to-do", value: "urgent to-do" },
  ];

  useEffect(() => {
    getAllTask();
  }, []);
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
                  className="flex justify-between place-items-center gap-3 capitalize"
                >
                  {selectedTask} <ChevronDown size={15} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] border border-primary-gray-200">
                {taskOption.map((x, index) => {
                  return (
                    <div key={index} className="capitalize">
                      <DropdownMenuItem
                        onClick={() => setSelectedTask(x.value)}
                      >
                        {x.label}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="border-[0.1px] border-primary-gray-100" />
                    </div>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex justify-end">
            <a href="#new-task">
              <Button
                className="bg-primary-blue-100 hover:bg-primary-blue-200 font-bold"
                size="sm"
                onClick={() => setNewTask(true)}
              >
                New Task
              </Button>
            </a>
          </div>
        </div>

        <div className=" overflow-auto h-[450px] w-full px-2">
          {allTask.map((x, i) => {
            return (
              <div key={i}>
                <TaskCard data={x} deleteTask={deleteTask} />
              </div>
            );
          })}

          <div className={`${newTask ? "block" : "hidden"}`} id="new-task">
            <NewTask onClose={() => setNewTask(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}

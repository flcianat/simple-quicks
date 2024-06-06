"use client";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Check,
  ChevronUp,
  Clock4,
  Ellipsis,
  Pencil,
  Square,
  SquareCheckBig,
} from "lucide-react";
import { DatePicker } from "@/components/datepicker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BASE } from "../api/api-call";
import { format } from "date-fns";
import { useStoreTemp } from "../store/zustand";
import { toast } from "sonner";

export default function NewTask({ onClose }) {
  const [openTask, setOpenTask] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);

  const addTask = async () => {
    const data = {
      id: null,
      name: name,
      deadline: format(deadline, "dd/MM/yyyy"),
      description: description,
      completed: true,
    };
    const res = await BASE({
      method: "post",
      type: "tasks",
      body: data,
    });
    if (res.status) {
      toast.success("Task has been added");
      onClose();
      setName("");
      setDescription("");
      setDeadline("");
    }
  };

  return (
    <div className="text-primary-gray-300 py-4">
      <div className="flex justify-between place-items-center">
        <div className="flex gap-3 place-items-center">
          <button disabled>
            <Square
              size={20}
              className="text-primary-gray-200 fill-gray-100 hover:cursor-not-allowed"
            />
          </button>

          <Input
            className="h-8 border border-primary-gray-200 w-[300px] focus-visible:ring-transparent"
            placeholder="Type Task Title"
            value={name}
            onChange={(x) => setName(x.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <div className="flex text-[14px] gap-3">
            <button onClick={() => setOpenTask(!openTask)}>
              <ChevronUp
                size={15}
                className={`${
                  openTask ? "duration-500" : "rotate-180 duration-500"
                } `}
              />
            </button>
          </div>
        </div>
      </div>

      {/* {openTask ? ( */}
      <div className={`${openTask ? "true" : "hidden"}`}>
        <div className="mt-3 pl-8 ">
          <div className="flex gap-3 place-items-center">
            <Clock4 size={15} className="text-primary-gray-200" />
            <DatePicker
              size="sm"
              deadline={deadline}
              setDeadline={setDeadline}
            />
          </div>
          <div className="w-full flex gap-3 place-items-baseline">
            <button className="">
              <Pencil size={15} className="text-primary-gray-200" />
            </button>

            <Textarea
              className="text-[14px] mt-1.5  focus-visible:ring-transparent border border-primary-gray-200"
              value={description}
              onChange={(x) => setDescription(x.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <Button
          className="bg-primary-blue-100 hover:bg-primary-blue-200 font-bold "
          size="sm"
          onClick={() => (onClose, addTask())}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

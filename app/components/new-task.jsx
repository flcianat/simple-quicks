"use client";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
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
export default function NewTask() {
  const [checkbox, setCheckbox] = useState(false);
  const [openTask, setOpenTask] = useState(true);
  return (
    <div className="text-primary-gray-300 py-4">
      <div className="flex justify-between place-items-center">
        <div className="flex gap-3 place-items-center">
          <button
            onClick={() => (setCheckbox(!checkbox), console.log(checkbox))}
            className=""
          >
            {checkbox ? (
              <SquareCheckBig size={20} className="text-primary-gray-200" />
            ) : (
              <Square size={20} className="text-primary-gray-200" />
            )}
          </button>

          <Input
            className="h-8 border border-primary-gray-200 w-[300px] focus-visible:ring-transparent"
            placeholder="Type Task Title"
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
            <button>
              <Ellipsis size={15} />
            </button>
          </div>
        </div>
      </div>

      {openTask ? (
        <div className="mt-3 pl-8 ">
          <div className="flex gap-3 place-items-center">
            <Clock4 size={15} className="text-primary-gray-200" />
            <DatePicker size="sm" />
          </div>
          <div className="w-full flex gap-3 place-items-baseline">
            <button className="">
              <Pencil size={15} className="text-primary-gray-200" />
            </button>

            <Textarea className="text-[14px] mt-1.5  focus-visible:ring-transparent border border-primary-gray-200" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

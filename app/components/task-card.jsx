"use client";

import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Bookmark,
  ChevronUp,
  Clock4,
  Ellipsis,
  Pencil,
  Square,
  SquareCheckBig,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DatePicker } from "@/components/datepicker";

export default function TaskCard({ data, deleteTask }) {
  const [checkbox, setCheckbox] = useState(data?.completed);
  const [openTask, setOpenTask] = useState(
    data?.completed === true ? true : false
  );
  const [editDesc, setEditDesc] = useState(false);
  const [editName, setEditName] = useState(false);

  return (
    <>
      <div className="overflow-auto ">
        <div className="text-primary-gray-300 py-4">
          <div className="flex justify-between place-items-center">
            <div className="flex gap-3 place-items-center">
              <button
                onClick={() => (setCheckbox(!checkbox), console.log(checkbox))}
                className=""
              >
                {checkbox ? (
                  <Square size={20} className="text-primary-gray-200" />
                ) : (
                  <SquareCheckBig size={20} className="text-primary-gray-200" />
                )}
              </button>

              {editName ? (
                <input
                  value={data?.name}
                  className="text text-primary-gray-300 text-[14px] font-bold p-1 outline-none focus:border focus:border-primary-gray-200 rounded-[5px]"
                  onBlur={() => setEditName(false)}
                />
              ) : (
                <h1
                  className={`${
                    !checkbox ? "line-through text-opacity-60" : ""
                  } text text-primary-gray-300 text-[14px] font-bold`}
                  onFocusCapture={() => setEditName(true)}
                  tabIndex={0}
                >
                  {data?.name}
                </h1>
              )}
            </div>

            <div className="flex gap-3">
              <div className="flex text-[14px] gap-3">
                <h1
                  className={`${!checkbox ? "hidden" : ""} text-indicator-red`}
                >
                  {data?.days_left} Days Left
                </h1>
                <h1>{data?.deadline}</h1>
                <button onClick={() => setOpenTask(!openTask)}>
                  <ChevronUp
                    size={15}
                    className={`${
                      openTask ? "duration-500" : "rotate-180 duration-500"
                    } `}
                  />
                </button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Ellipsis
                      size={15}
                      className="hover:cursor-pointer mt-0.5"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mr-[50px]">
                    <DropdownMenuItem
                      className="hover:cursor-pointer text-indicator-red"
                      onClick={() => deleteTask(data.id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {openTask ? (
            <div className="mt-3 pl-8 ">
              <div className="flex gap-3 place-items-center">
                <Clock4
                  size={15}
                  className={`${
                    data?.description !== null
                      ? "text-primary-blue-100"
                      : "text-primary-gray-300"
                  } `}
                />
                <DatePicker size="sm" deadline={data?.deadline} />
              </div>

              <div className="w-full flex gap-3 place-items-baseline">
                <button className="">
                  <Pencil
                    size={15}
                    className={`${
                      data?.description !== ""
                        ? "text-primary-blue-100"
                        : "text-primary-gray-300"
                    } `}
                  />
                </button>

                {editDesc ? (
                  <textarea
                    defaultValue={
                      data?.description !== ""
                        ? data?.description
                        : "No Description"
                    }
                    onBlur={() => setEditDesc(false)}
                    className="text-[14px] mt-1.5 w-full p-1 px-2 outline-none focus:border focus:border-primary-gray-200 rounded-[5px] min-h-[100px]"
                  />
                ) : (
                  <p
                    className="text-[14px] mt-1.5 hover:border hover:border-primary-gray-200 p-1 px-2 rounded-[5px]"
                    onFocusCapture={() => setEditDesc(true)}
                    tabIndex={0}
                  >
                    {data?.description !== ""
                      ? data?.description
                      : "No Description"}
                  </p>
                )}
              </div>

              <div className="flex place-items-center gap-3 mt-3">
                <Bookmark size={15} className="text text-primary-blue-100" />
                <div className="flex text-[14px] gap-2 text-primary-gray-300 font-semibold">
                  <h1 className="bg bg-sticker-orange px-2 rounded-md">
                    Important ASAP
                  </h1>
                  <h1 className="bg bg-sticker-tosca px-2 rounded-md">
                    Self Task
                  </h1>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <Separator className="bg bg-primary-gray-200" />
      </div>
    </>
  );
}

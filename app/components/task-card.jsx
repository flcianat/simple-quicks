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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DatePicker } from "@/components/datepicker";
import { Button } from "@/components/ui/button";

export default function TaskCard({ data }) {
  const [checkbox, setCheckbox] = useState(data?.completed);
  const [openTask, setOpenTask] = useState(
    data?.completed === true ? true : false
  );

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

              <h1
                className={`${
                  !checkbox ? "line-through text-opacity-60" : ""
                } text text-primary-gray-300 text-[14px] font-bold`}
              >
                {data.name}
              </h1>
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
                    <DropdownMenuItem className="hover:cursor-pointer text-indicator-red ">
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

                <p className="text-[14px] mt-1.5">
                  {data?.description !== ""
                    ? data?.description
                    : "No Description"}
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <Separator className="bg bg-primary-gray-200" />

        {/* new task mapping */}
      </div>
    </>
  );
}

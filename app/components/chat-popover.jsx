"use client";

import { useToggle } from "../store/zustand";
import { Search, User2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { IconPerson } from "./icons";

export default function ChatPopover({ data }) {
  const { bubbleActive, setBubbleActive, setChatType } = useToggle();

  return (
    <div className={bubbleActive === "chat" ? "block" : "hidden"}>
      <div className="bg-white w-[600px] h-[520px] fixed right-0 mr-5 bottom-[100px] p-5 rounded-[5px]">
        {/* header search */}
        <div className="border border-primary-gray-200 h-8 p-1 px-2 rounded-[5px] flex place-items-center justify-around">
          <input className="focus:outline-none w-full" placeholder="Search" />
          <Search size={15} className="text text-primary-gray-300" />
        </div>

        {/* chat list  */}

        {data.map((x) => {
          return (
            <div
              className="py-2 px-2 hover:bg-gray-50 hover:cursor-pointer my-1 rounded-md transition-all"
              onClick={() => (setBubbleActive("chatroom"), setChatType(x.type))}
            >
              <div
                className={`${x.type === "single" ? "gap-7" : "gap-3"} flex `}
              >
                {x.type === "single" ? (
                  <Avatar>
                    <AvatarFallback className="bg bg-primary-blue-100 text-white font-semibold">
                      F
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="flex -space-x-6 ">
                    <Avatar>
                      <AvatarFallback className="bg bg-primary-gray-100 text-primary-gray-200 font-semibold">
                        <IconPerson color="gray" />
                      </AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="bg bg-primary-blue-100 text-white font-semibold">
                        <IconPerson color="white" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}

                <div className=" w-full flex place-items-center">
                  <div className="w-full">
                    <div className="flex gap-3 place-items-center">
                      <h1 className="font-semibold text-primary-blue-100 text-[16px]">
                        {x.name}
                      </h1>
                      <h1 className="text text-primary-gray-200 text-[14px]">
                        {x.lastMessageTime}
                      </h1>
                    </div>

                    {x.type === "single" ? (
                      <div>
                        <h1 className="text-[14px]">
                          Hey there! Welcome to your inbox.
                        </h1>
                      </div>
                    ) : (
                      <div>
                        <h1 className="text-[14px] font-semibold text-primary-gray-300">
                          Cameron Phillips :
                        </h1>
                        <h1 className="text-[14px]">Please check this out!</h1>
                      </div>
                    )}
                  </div>

                  <div className="w-[8px] h-[8px] bg-indicator-red rounded-full"></div>
                </div>
              </div>
              <Separator className="bg bg-primary-gray-200 mt-3" />
            </div>
          );
        })}

        {/* chat - group */}
        {/* <div
          className="py-2 px-2 hover:bg-gray-50 hover:cursor-pointer my-1 rounded-md transition-all"
          onClick={() => (setBubbleActive("chatroom"), setChatType("group"))}
        >
          <div className="flex gap-3">
            <div className="flex -space-x-6 ">
              <Avatar>
                <AvatarFallback className="bg bg-primary-gray-100 text-primary-gray-200 font-semibold">
                  <IconPerson color="gray" />
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg bg-primary-blue-100 text-white font-semibold">
                  <IconPerson color="white" />
                </AvatarFallback>
              </Avatar>
            </div>

            <div className=" w-full flex place-items-center">
              <div className="w-full">
                <div className="flex gap-3 place-items-center">
                  <h1 className="font-semibold text-primary-blue-100 text-[16px]">
                    10922 - Naturalization
                  </h1>
                  <h1 className="text text-primary-gray-200 text-[14px]">
                    01/06/2021 12:19
                  </h1>
                </div>

                <h1 className="text-[14px] font-semibold text-primary-gray-300">
                  Cameron Phillips :
                </h1>
                <h1 className="text-[14px] text-primary-gray-300">
                  Hey there! Welcome to your inbox.
                </h1>
              </div>

              <div className="w-[8px] h-[8px] bg-indicator-red rounded-full"></div>
            </div>
          </div>
        </div> */}

        {/* chat - single */}
        {/* <div
          className="py-2 px-2 hover:bg-gray-50 hover:cursor-pointer my-1 rounded-md transition-all"
          onClick={() => (setBubbleActive("chatroom"), setChatType("single"))}
        >
          <div className="flex gap-7 place-items-center">
            <Avatar>
              <AvatarFallback className="bg bg-primary-blue-100 text-white font-semibold">
                F
              </AvatarFallback>
            </Avatar>

            <div>
              <div className="flex gap-3 place-items-center">
                <h1 className="font-semibold text-primary-blue-100 text-[16px]">
                  FastVisa Support
                </h1>
                <h1 className="text text-primary-gray-200 text-[14px]">
                  01/06/2021 12:19
                </h1>
              </div>

              <h1 className="text-[14px]">Hey there! Welcome to your inbox.</h1>
            </div>
          </div>
        </div> */}

        {/* chat room */}
      </div>
    </div>
  );
}

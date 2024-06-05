"use client";

import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Ellipsis, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IconLoading } from "./icons";
import { useToggle } from "../store/zustand";

export default function ChatRoom({ type = "" }) {
  const { setBubbleActive } = useToggle();

  switch (type) {
    case "single":
      return (
        <div className="bg-white w-[600px] h-[520px] fixed right-0 mr-5 bottom-[100px] rounded-[2px] ">
          <div className="flex justify-between items-center p-5">
            <div className="flex items-center gap-3">
              <button onClick={() => setBubbleActive("chat")}>
                <ArrowLeft className="text-primary-gray-300" />
              </button>
              <h1 className="font-semibold text-primary-blue-100 text-[16px]">
                FastVisa Support
              </h1>
            </div>

            <button onClick={() => setBubbleActive("chat")}>
              <X className="text-primary-gray-300" />
            </button>
          </div>
          <Separator />

          <div className="overflow-auto h-[450px] px-5 py-2">
            <div className="mb-4">
              <h1 className="font-semibold text-primary-blue-100 text-[14px]">
                FastVisa Support
              </h1>
              <div className="bg-brokenwhite p-2 space-y-1 w-[450px]">
                <p className="text-[14px]">
                  Hey there. Welcome to your inbox! Contact us for more
                  information and help about anything! We’ll send you a response
                  as soon as possible.
                </p>
                <h1 className="text-[12px] text-primary-gray-200 font-semibold text-opacity-70">
                  10:32
                </h1>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div>
                <h1 className="font-semibold text-chat-accent-purple text-[14px] text-right">
                  You
                </h1>
                <div className="flex gap-3 place-content-baseline">
                  <MoreButton />
                  <div className="bg-chat-base-purple p-2 space-y-1 w-[450px]">
                    <p className="text-[14px]">
                      Hi, I need help with something can you help me?
                    </p>
                    <h1 className="text-[12px] text-primary-gray-200 font-semibold text-opacity-70 text-left">
                      10:32
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-[110px] ml-[10px]">
            {/* NOTE : add conditions */}
            <div className="py-3 px-4 bg-sticker-blue w-[580px] rounded-[5px] flex place-items-center gap-3 mb-2">
              <div className="animate animate-spin">
                <IconLoading />
              </div>
              <h1 className="text text-primary-gray-300 font-semibold text-[14px]">
                Please wait while we connect you with one of our team ...
              </h1>
            </div>

            <div className="flex place-items-center gap-3 w-[580px]">
              <input className="focus:outline-none w-full border border-primary-gray-200 h-8 rounded-[5px] p-1 px-2" />
              <Button className="bg bg-primary-blue-100 hover:bg-primary-blue-200 h-8 rounded-[5px]">
                Send
              </Button>
            </div>
          </div>
        </div>
      );
    case "group":
      return (
        <div className="bg-white w-[600px] h-[520px] fixed right-0 mr-5 bottom-[100px] rounded-[2px] ">
          <div className="flex justify-between items-center p-5">
            <div className="flex items-center gap-3">
              <button onClick={() => setBubbleActive("chat")}>
                <ArrowLeft className="text-primary-gray-300" />
              </button>
              <div>
                <h1 className="font-semibold text-primary-blue-100 text-[16px]">
                  10922 - Naturalization
                </h1>
                <h1 className="text-[12px] text-primary-gray-200 font-semibold text-opacity-70">
                  3 Participants
                </h1>
              </div>
            </div>

            <button onClick={() => setBubbleActive("chat")}>
              <X className="text-primary-gray-300" />
            </button>
          </div>
          <Separator />

          <div className="overflow-auto h-[450px] px-5 py-2">
            <div className="mb-4">
              <h1 className="font-semibold text-chat-accent-orange text-[14px]">
                Mary Hilda
              </h1>
              <div className="bg bg-chat-base-orange p-2 space-y-1 w-[450px]">
                <p className="text-[14px]">
                  Just fill me in with his updates yea?
                </p>
                <h1 className="text-[12px] text-primary-gray-200 font-semibold text-opacity-70">
                  10:32
                </h1>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div>
                <h1 className="font-semibold text-chat-accent-purple text-[14px] text-right">
                  You
                </h1>
                <div className="flex gap-3 place-content-baseline">
                  <MoreButton />
                  <div className="bg-chat-base-purple p-2 space-y-1 w-[450px]">
                    <p className="text-[14px]">
                      {`No worries. It will be completed ASAP. I've asked him
                    yesterday.`}
                    </p>
                    <h1 className="text-[12px] text-primary-gray-200 font-semibold text-opacity-70 text-left">
                      10:32
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-[110px] ml-[10px]">
            {/* NOTE : could be added */}
            {/* <div className="flex justify-center">
              <div className="py-2 px-4 bg-sticker-blue rounded-[5px] place-items-center gap-3 mb-2 w-[150px] text-[14px] flex justify-center">
                <h1 className="font-semibold text-primary-blue-100">
                  New Message
                </h1>
              </div>
            </div> */}

            <div className="flex place-items-center gap-3 w-[580px]">
              <input
                className="focus:outline-none w-full border border-primary-gray-200 h-8 rounded-[5px] p-1 px-2"
                placeholder="Type a new message"
              />
              <Button className="bg bg-primary-blue-100 hover:bg-primary-blue-200 h-8 rounded-[5px]">
                Send
              </Button>
            </div>
          </div>
        </div>
      );
  }
}

export const MoreButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis size={15} className="hover:cursor-pointer mt-0.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-[100px]">
        <DropdownMenuItem className="hover:cursor-pointer text-primary-blue-100 ">
          Edit
        </DropdownMenuItem>
        <Separator className="bg bg-primary-gray-100" />
        <DropdownMenuItem className="hover:cursor-pointer text-indicator-red ">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

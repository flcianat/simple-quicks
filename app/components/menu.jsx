"use client";
import { Button } from "@/components/ui/button";
import { IconChat, IconChromeReader, IconEnergy } from "./icons";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Menu() {
  const [active, setActive] = useState("default");
  const [show, setShow] = useState(false);

  const handleButtonClick = (buttonType) => {
    if (active === buttonType) {
      setActive("default");
    } else {
      setActive(buttonType);
    }
  };

  const renderActiveButton = (active) => {
    switch (active) {
      case "chat":
        return (
          <Button
            className="rounded-full h-[60px] w-[60px] bg-indicator-purple relative z-30"
            onClick={() => handleButtonClick("chat")}
          >
            <IconChat width="20" height="20" color="white" />
          </Button>
        );
      case "task":
        return (
          <Button
            className="rounded-full h-[60px] w-[60px] bg bg-indicator-orange relative z-30"
            onClick={() => handleButtonClick("task")}
          >
            <IconChromeReader width="20" height="20" color="white" />
          </Button>
        );
      default:
        return (
          <Button
            className="rounded-full h-[60px] w-[60px] hover:bg-primary-blue-200"
            onClick={() => (handleButtonClick(""), setShow(!show))}
          >
            <IconEnergy width="20" height="20" />
          </Button>
        );
    }
  };

  return (
    <div className="bg">
      <div className="flex gap-3 place-items-center fixed right-0 bottom-0 m-5">
        <div
          className={`flex gap-3 transition-transform duration-500 ${
            show
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-[60px] opacity-0 invisible"
          }`}
        >
          <Button
            className={`${
              active === "task" ? "hidden" : "block"
            } rounded-full h-[50px] w-[50px] bg-white hover:bg-none`}
            onClick={() => handleButtonClick("task")}
          >
            <IconChromeReader width="20" height="20" />
          </Button>
          <Button
            className={`${
              active === "chat" ? "hidden" : "block"
            } rounded-full h-[50px] w-[50px] bg-white hover:bg-none`}
            onClick={() => handleButtonClick("chat")}
          >
            <IconChat color="blue" width="20" height="20" />
          </Button>
        </div>
        {renderActiveButton(active)}
      </div>
    </div>
  );
}

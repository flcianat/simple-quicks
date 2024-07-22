"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export function DatePicker({ deadline, setDeadline }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant={"outline"}
          className={cn(
            "justify-between text-left font-normal w-[180px] border border-primary-gray-200 h-8",
            !deadline && "text-muted-foreground"
          )}
        >
          {deadline ? format(deadline, "dd/MM/yyyy") : <span>Set Date</span>}
          <CalendarIcon size={15} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="ml-[400px] p-0">
        <Calendar
          mode="single"
          selected={deadline}
          onSelect={setDeadline}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

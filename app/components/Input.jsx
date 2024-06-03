"use client";

import { IconSearch } from "./icons";

export default function Input({ type = "", color = "white" }) {
  switch (type) {
    case "type-bar":
      return (
        <input
          type="text"
          className=" px-4 py-2 rounded-[5px] border border-primary-gray-200"
          placeholder="Type a new message"
        />
      );
    case "search-bar":
      return (
        <div className="px-4 py-2 rounded-[5px] border border-primary-gray-200 flex justify-between place-items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
          <IconSearch color={color} />
        </div>
      );
  }
}

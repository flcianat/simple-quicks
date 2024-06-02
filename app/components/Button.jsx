"use client";
export default function Button({
  btn_variant = "",
  text = "",
  color = "",
  icon = "",
}) {
  switch (btn_variant) {
    case "square":
      return (
        <div>
          <button className="capitalize bg-primary-blue px-4 py-2 text-white rounded-[5px] font-medium">
            {text}
          </button>
        </div>
      );

    case "rounded":
      return (
        <div>
          <button
            className={`${color} capitalize  text-white w-[68px] h-[68px] rounded-full flex place-items-center justify-center`}
          >
            {icon}
          </button>
        </div>
      );
    case "rounded-small":
      return (
        <div>
          <button
            className={`${color} capitalize  text-white w-[60px] h-[60px] rounded-full flex place-items-center justify-center`}
          >
            {icon}
          </button>
        </div>
      );
  }
}

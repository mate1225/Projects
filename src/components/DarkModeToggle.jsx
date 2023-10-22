import React from "react";
import * as Switch from "@radix-ui/react-switch";
function DarkModeToggle() {
  function handelChange() {
    console.log("changed");
  }

  return (
    <form>
      <div className="mb-5 flex flex-col items-center gap-3">
        <label
          className="pr-[15px] leading-none text-GrayishBlue"
          htmlFor="airplane-mode"
        >
          Dark Mode
        </label>
        <Switch.Root
          className=" shadow-blackA7 relative h-[25px] w-[42px] cursor-default rounded-full bg-GrayishBlue 
        shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-BlueText data-[state=checked]:bg-PurpleBg"
          id="airplane-mode"
          style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
        >
          <Switch.Thumb
            className="shadow-blackA7 block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-white 
        shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]"
            onCheckedChange={handelChange}
          />
        </Switch.Root>
      </div>
    </form>
  );
}

export default DarkModeToggle;

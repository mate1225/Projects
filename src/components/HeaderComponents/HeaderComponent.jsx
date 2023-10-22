/* import DarkModeToggle from "../DarkModeToggle";
import HamburgerMenu from "../hamburgerMenu"; */
import TitleButtons from "./TitleButtons";

function HeaderComponent() {
  return (
    <>
      <div className="  lx:pb-8 flex w-screen max-w-[1440px] flex-wrap items-center justify-center  gap-8 bg-[#1F3454] pb-3 pt-3 xl:rounded-b-full xl:pt-6">
        {/* <DarkModeToggle /> */}
        <TitleButtons text="Contacts" />
        <TitleButtons text="About me" />
        <TitleButtons text="Main page" />
        <div className=" rounded-[1.25rem] bg-PurpleBg px-3 py-[0.35rem] text-white">
          <h2 className=" text-[1.5rem] font-semibold xl:text-[2rem]">
            Frontend Mentor
          </h2>
        </div>
        <TitleButtons text="Personal Projects" />
        {/*  <HamburgerMenu /> */}
      </div>
    </>
  );
}

export default HeaderComponent;

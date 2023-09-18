import Titles from "./Titles";

function HeaderComponent() {
  return (
    <>
      <div className="  flex w-screen max-w-[1440px] flex-wrap items-center justify-center gap-8 rounded-b-[50px] bg-[#1F3454] pb-8 pt-6 xl:rounded-b-full">
        <Titles text="About the page" />
        <Titles text="Contacts" />
        <Titles text="About me" />
        <Titles text="Main page" />
        <div className=" rounded-[1.25rem] bg-PurpleBg px-3 py-[0.35rem] text-white">
          <h2 className=" text-[2rem] font-semibold">Frontend Mentor</h2>
        </div>
        <Titles text="Personal Projects" />
      </div>
    </>
  );
}

export default HeaderComponent;

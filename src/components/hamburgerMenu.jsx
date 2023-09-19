function HamburgerMenu() {
  function handelClick() {
    console.log("hamburgerMenu");
  }
  return (
    <>
      <div
        className="flex cursor-pointer flex-col gap-2 xl:hidden"
        onClick={handelClick}
      >
        <div className="  h-[0.2rem] w-10 bg-BlueText"></div>
        <div className="  h-[0.2rem] w-10 bg-BlueText"></div>
        <div className="  h-[0.2rem] w-10 bg-BlueText"></div>
      </div>
    </>
  );
}

export default HamburgerMenu;

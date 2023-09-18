function Icon(props) {
  const { on, handelClick, title } = props;
  return (
    <div>
      <div
        onClick={handelClick}
        className=" mb-3 flex w-screen max-w-[1440px] cursor-pointer items-center justify-center border-b-2 border-solid border-gray-500 "
      >
        <h2 className=" mb-5  text-[4rem] text-white ">{title}</h2>
        <div
          className={` relative ml-5 h-[3rem] w-[3rem] rounded-full bg-white duration-300 ${
            on ? "" : "rotate-[-180deg]"
          }`}
        >
          <div className=" bg-DarkBlue absolute left-1 top-6 h-1 w-6 rotate-45  "></div>
          <div className=" bg-DarkBlue absolute right-1 top-6 h-1 w-6 rotate-[135deg] "></div>
        </div>
      </div>
    </div>
  );
}
export default Icon;

function Icon(props) {
  const { on, handelClick, title } = props;
  return (
    <div
      onClick={handelClick}
      className=" mb-3 flex cursor-pointer items-center justify-center border-b-2 border-solid border-gray-500"
    >
      <h2 className=" mb-5  text-[4rem] text-[#1780FC]">{title}</h2>
      <div
        className={` relative ml-5 h-[3rem] w-[3rem] rounded-full bg-[#1780FC] duration-300 ${
          on ? "" : "rotate-[-180deg]"
        }`}
      >
        <div className=" absolute left-1 top-6 h-1 w-6 rotate-45 bg-white  "></div>
        <div className=" absolute right-1 top-6 h-1 w-6 rotate-[135deg] bg-white "></div>
      </div>
    </div>
  );
}
export default Icon;

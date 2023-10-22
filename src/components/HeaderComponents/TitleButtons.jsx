function TitleButtons(props) {
  return (
    <button className=" hidden cursor-pointer text-[2rem] font-semibold text-BlueText xl:inline-block ">
      {props.text}
    </button>
  );
}

export default TitleButtons;

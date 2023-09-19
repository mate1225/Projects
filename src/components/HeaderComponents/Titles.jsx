function Titles(props) {
  return (
    <div className=" hidden cursor-pointer text-BlueText xl:inline-block">
      <h2 className=" text-[2rem] font-semibold">{props.text}</h2>
    </div>
  );
}

export default Titles;

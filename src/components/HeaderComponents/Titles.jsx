function Titles(props) {
  return (
    <div className=" text-BlueText hidden cursor-pointer 2xl:inline-block">
      <h2 className=" text-[2rem] font-semibold">{props.text}</h2>
    </div>
  );
}

export default Titles;

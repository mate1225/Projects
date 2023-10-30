function Technologies({ image, state }) {
  if (state) {
    return <img src={image} className=" w-[3em]" />;
  }
}

export default Technologies;

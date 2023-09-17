function Cards(props) {
  const { title, img, repoUrl, liveSiteUrl } = props;
  function showImage() {
    console.log("show the image");
  }
  //hsla(216, 45%, 11%, 1)
  return (
    <>
      <section className="flex flex-col gap-5 rounded-[1.25rem] bg-[#1F3454] p-10  text-white">
        <h2 className="text-center text-[2rem] lg:text-[2.5rem]">{title}</h2>
        <img
          src={img}
          alt="image"
          className="h-[200px] cursor-pointer rounded-[1.25rem]"
          onClick={showImage}
        />
        <div className=" grid gap-5 text-[1.5rem] lg:text-[2rem] ">
          <a
            className="rounded-[0.625rem] bg-[#012d91] pb-1 pt-1 text-center text-white duration-500 hover:bg-[#5200D9] hover:text-white"
            href={liveSiteUrl}
            target="blank"
          >
            live Site
          </a>
          <a
            className="rounded-[0.625rem] bg-[#012d91] pb-1 pt-1 text-center text-white duration-500 hover:bg-[#5200D9] hover:text-white"
            href={repoUrl}
            target="blank"
          >
            Github Repo
          </a>
        </div>
      </section>
    </>
  );
}

export default Cards;

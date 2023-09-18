import { useState } from "react";
function Cards(props) {
  const { title, img, repoUrl, liveSiteUrl } = props;
  const [imgState, setImgState] = useState(false);
  function showImage() {
    setImgState((prev) => !prev);
  }

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
          <img
            src={img}
            className={` absolute left-[5vw] top-[200px] w-[90vw] rounded-lg  ${
              imgState ? "" : "hidden"
            }
            `}
          />
        </div>
      </section>
    </>
  );
}

export default Cards;

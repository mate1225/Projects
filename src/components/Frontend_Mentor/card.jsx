import { useEffect, useState } from "react";
//images
//technologies images
import css from "../../images/technologies/css.png";
import scss from "../../images/technologies/scss.png";
import javascript from "../../images/technologies/JavaScript.png";
import react from "../../images/technologies/react.png";
import html from "../../images/technologies/html.png";
import vite from "../../images/technologies/vite.png";
import tailwind_css from "../../images/technologies/tailwind-css.png";
import Technologies from "./technologies";
function Card({ title, img, repoUrl, liveSiteUrl, technologies }) {
  console.log(technologies);
  const [imgState, setImgState] = useState(false);
  function showImage() {
    setImgState((prev) => !prev);
  }
  //
  /*   const [technologiesState, setTechnologiesState] = useState({
    html: "",
    css: "",
    javascript: "",
    sass: "",
    react: "",
    tcss: "",
    typescript: "",
  });

  function sortArray(dataArray, predeterminedOrder) {
    const result = predeterminedOrder.map((item) => {
      if (dataArray.includes(item)) {
        return item;
      } else {
        return "";
      }
    });

    setTechnologiesState(() => {
      return {
        ...result,
      };
    });
  }

  const dataArray = technologies.split(" ");

  const order = [
    "html",
    "css",
    "javascript",
    "sass",
    "react",
    "tcss",
    "typescript",
  ];
  useEffect(() => {
    sortArray(dataArray, order);
  }, []);
 */
  return (
    <>
      <section className="mx-5 flex flex-col gap-5 rounded-[1.25rem] bg-[#1F3454] p-5 text-white  xl:mx-0 xl:p-10">
        <h2 className="text-center text-[1.7rem] lg:text-[2.5rem]">{title}</h2>
        <img
          src={img}
          alt="image"
          className=" cursor-pointer rounded-[1.25rem]"
          onClick={showImage}
        />
        <div>
          {/*  <h3 className="  text-[1rem] font-semibold text-white">
            Used Technologies:
          </h3> */}
          <div className=" mt-3 flex flex-wrap justify-center gap-10">
            {/*  <Technologies image={html} state={technologiesState.html !== ""} />
            <Technologies image={css} state={technologiesState.css !== ""} />
            <Technologies
              image={javascript}
              state={technologiesState.javascript !== ""}
            />
            <Technologies image={scss} state={technologiesState.sass !== ""} />
            <Technologies
              image={react}
              state={technologiesState.react !== ""}
            />
            <Technologies
              image={tailwind_css}
              state={technologiesState.tcss !== ""}
            /> */}
            {/*  <img
              src={technologies2}
              className={` w-[3rem] ${technologies1 === "" ? "hidden" : ""}`}
            />
            <img
              src={technologies3}
              className={` w-[3rem] ${technologies1 === "" ? "hidden" : ""}`}
            />
            <img
              src={technologies4}
              className={` w-[3rem] ${technologies1 === "" ? "hidden" : ""}`}
            />
            <img
              src={technologies5}
              className={` w-[3rem] ${technologies1 === "" ? "hidden" : ""}`}
            />
            <img
              src={technologies6}
              className={` w-[3rem] ${technologies1 === "" ? "hidden" : ""}`}
            />
            <img
              src={technologies7}
              className={` w-[3rem] ${technologies1 === "" ? "hidden" : ""}`}
            /> */}
          </div>
        </div>

        <div className=" grid gap-5 text-[1.4rem] lg:text-[2rem] ">
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
        <div
          className={` fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer ${
            imgState ? "" : "hidden"
          }`}
          onClick={showImage}
        >
          <img src={img} className="h-full w-[90%] rounded-lg object-cover" />
        </div>
      </section>
    </>
  );
}

export default Card;

import { useState } from "react";
import Cards from "./cards";
//images
import social_media_dashboard from "./images/social_media_dashboard.png";
import Testimonials_grid_section from "./images/Testimonials_grid_section.png";
import Time_tracking_dashboard from "./images/Time_tracking_dashboard.png";
import Tip_Calculator_App from "./images/Tip_Calculator_App.png";
//technologies images
import css from "./images/technologies/css.png";
import scss from "./images/technologies/scss.png";
import javascript from "./images/technologies/javascript.png";
import react from "./images/technologies/react.png";
import html from "./images/technologies/html.png";
import vite from "./images/technologies/vite.png";
import tailwind_css from "./images/technologies/tailwind-css.png";
function Lv2() {
  const [CardsState, setCardsState] = useState(true);
  function showCards() {
    setCardsState((prev) => !prev);
  }
  return (
    <section className="  text-center">
      <div
        onClick={showCards}
        className=" mb-3 flex  cursor-pointer items-center justify-center border-b-2 border-solid border-gray-500"
      >
        <h2 className=" mb-5 mt-5  text-[4rem] text-[#1780FC] ">level 2</h2>
        <div
          className={` relative ml-5 h-[3rem] w-[3rem] rounded-full bg-[#1780FC] duration-300 ${
            CardsState ? "" : "rotate-[-180deg]"
          }`}
        >
          <div className=" absolute left-1 top-6 h-1 w-6 rotate-45 bg-white  "></div>
          <div className=" absolute right-1 top-6 h-1 w-6 rotate-[135deg] bg-white "></div>
        </div>
      </div>

      <div
        className={` grid  gap-10 lg:grid-cols-2 lg:grid-rows-2 ${
          CardsState ? "hidden" : " grid"
        }`}
      >
        <Cards
          title="social Media Dashboard"
          img={social_media_dashboard}
          repoUrl="https://github.com/mate1225/social-media-dashboard"
          liveSiteUrl="https://mate1225.github.io/social-media-dashboard/"
        />
        <Cards
          title="Testimonials Grid Section"
          img={Testimonials_grid_section}
          repoUrl="https://github.com/mate1225/testimonials-grid-section"
          liveSiteUrl="https://mate1225.github.io/testimonials-grid-section/"
        />
        <Cards
          title="Time Tracking Dashboard"
          img={Time_tracking_dashboard}
          repoUrl="https://github.com/mate1225/Fronted-Mentor-time-tracking-dashboard"
          liveSiteUrl="https://mate1225.github.io/Fronted-Mentor-time-tracking-dashboard/"
        />
        <Cards
          title="Tip Calculator App"
          img={Tip_Calculator_App}
          repoUrl="https://github.com/mate1225/Tip_Calculator"
          liveSiteUrl="https://mate1225.github.io/Tip_Calculator/"
        />
      </div>
    </section>
  );
}

export default Lv2;

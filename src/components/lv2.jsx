import { useState } from "react";
import Cards from "./cards";
//images
import Mentor_social_media_dashboard from "./images/Mentor_social_media_dashboard.png";
import Testimonials_grid_section from "./images/Testimonials_grid_section.png";
import Time_tracking_dashboard from "./images/Time_tracking_dashboard.png";
import Tip_Calculator_App from "./images/Tip_Calculator_App.png";
import icon from "./images/expand_more_FILL0_wght400_GRAD0_opsz24.svg";
function Lv2() {
  const [imgState, setImgState] = useState(false);
  function showImage() {
    setImgState((prev) => !prev);
  }
  return (
    <section className="  text-center">
      <div
        onClick={showImage}
        className=" mb-3 flex  cursor-pointer items-center justify-center border-b-2 border-solid border-gray-500"
      >
        <h2 className=" mb-5 mt-5  text-[4rem] text-[#1780FC] ">level 2</h2>
        <img src={icon} />
      </div>

      <div
        className={`grid gap-10  lg:grid-cols-2 lg:grid-rows-2 ${
          imgState ? "hidden" : " grid"
        }`}
      >
        <Cards
          title="social Media Dashboard"
          img={Mentor_social_media_dashboard}
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

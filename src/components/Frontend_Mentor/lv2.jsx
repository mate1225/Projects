import { useState } from "react";
//jsx
import Card from "./card";
import Icon from "./Icon";
//images
import social_media_dashboard from "../../images/social_media_dashboard.png";
import Testimonials_grid_section from "../../images/Testimonials_grid_section.png";
import Time_tracking_dashboard from "../../images/Time_tracking_dashboard.png";
import Tip_Calculator_App from "../../images/Tip_Calculator_App.png";
import Body_Mass_Index_calculator from "../../images/BodyMassIndexCalsulator.png";

function Lv2() {
  const [CardsState, setCardsState] = useState(true);
  function showCards() {
    setCardsState((prev) => !prev);
  }
  return (
    <section className="  text-center">
      <Icon on={CardsState} handelClick={() => showCards()} title="level 2" />
      <div
        className={` mb-[5rem] mt-10 grid gap-10 lg:grid-cols-2 lg:grid-rows-2 ${
          CardsState ? "hidden" : " grid"
        }`}
      >
        <Card
          title="social Media Dashboard"
          img={social_media_dashboard}
          repoUrl="https://github.com/mate1225/social-media-dashboard"
          liveSiteUrl="https://mate1225.github.io/social-media-dashboard/"
          technologies=""
        />
        <Card
          title="Testimonials Grid Section"
          img={Testimonials_grid_section}
          repoUrl="https://github.com/mate1225/testimonials-grid-section"
          liveSiteUrl="https://mate1225.github.io/testimonials-grid-section/"
          technologies=""
        />
        <Card
          title="Time Tracking Dashboard"
          img={Time_tracking_dashboard}
          repoUrl="https://github.com/mate1225/Fronted-Mentor-time-tracking-dashboard"
          liveSiteUrl="https://mate1225.github.io/Fronted-Mentor-time-tracking-dashboard/"
          technologies=" "
        />
        <Card
          title="Tip Calculator App"
          img={Tip_Calculator_App}
          repoUrl="https://github.com/mate1225/Tip_Calculator"
          liveSiteUrl="https://mate1225.github.io/Tip_Calculator/"
          technologies=""
        />
        <Card
          title="Body Mass Index calculator"
          img={Body_Mass_Index_calculator}
          repoUrl="https://github.com/mate1225/Body_Mass_Index_calculator"
          liveSiteUrl="https://mate1225.github.io/Body_Mass_Index_calculator/"
          technologies=""
        />
      </div>
    </section>
  );
}

export default Lv2;

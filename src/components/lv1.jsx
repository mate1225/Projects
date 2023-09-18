import { useState } from "react";
import Cards from "./cards";
//images
import ProductPreviewCardImg from "./images/Product_Preview_Card.png";
import Order_summary_card from "./images/Order_summary_card.png";
//technologies images
import css from "./images/technologies/css.png";
import scss from "./images/technologies/scss.png";
import javascript from "./images/technologies/javascript.png";
import react from "./images/technologies/react.png";
import html from "./images/technologies/html.png";
import vite from "./images/technologies/vite.png";
import tailwind_css from "./images/technologies/tailwind-css.png";
function Lv1() {
  const [CardsState, setCardsState] = useState(true);
  function showCards() {
    setCardsState((prev) => !prev);
  }
  return (
    <section className=" text-center   ">
      <div
        onClick={showCards}
        className=" mb-3 flex cursor-pointer items-center justify-center border-b-2 border-solid border-gray-500"
      >
        <h2 className=" mb-5  text-[4rem] text-[#1780FC]">level 1</h2>
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
        className={`  gap-10 lg:grid-cols-2 lg:grid-rows-1 ${
          CardsState ? "hidden" : " grid"
        }`}
      >
        <Cards
          title="Product preview card"
          img={ProductPreviewCardImg}
          repoUrl="https://github.com/mate1225/product-preview-card-component"
          liveSiteUrl="https://mate1225.github.io/product-preview-card-component/"
        />
        <Cards
          title="Order summary card"
          img={Order_summary_card}
          repoUrl="https://github.com/mate1225/order-summary-component"
          liveSiteUrl="https://mate1225.github.io/order-summary-component/"
        />
      </div>
    </section>
  );
}

export default Lv1;

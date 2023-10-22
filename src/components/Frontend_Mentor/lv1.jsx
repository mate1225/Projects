import { useState } from "react";
//jsx
import Card from "./card";
import Icon from "./Icon";
//images
import ProductPreviewCardImg from "../../images/Product_Preview_Card.png";
import Order_summary_card from "../../images/Order_summary_card.png";
//technologies images
import css from "../../images/technologies/css.png";
import scss from "../../images/technologies/scss.png";
import javascript from "../../images/technologies/JavaScript.png";
import react from "../../images/technologies/react.png";
import html from "../../images/technologies/html.png";
import vite from "../../images/technologies/vite.png";
import tailwind_css from "../../images/technologies/tailwind-css.png";

function Lv1() {
  const [CardsState, setCardsState] = useState(true);
  function showCards() {
    setCardsState((prev) => !prev);
  }
  return (
    <section className=" text-center">
      <Icon on={CardsState} handelClick={() => showCards()} title="level 1" />
      <div
        className={` mb-[5rem] mt-10 gap-10 lg:grid-cols-2 lg:grid-rows-1 ${
          CardsState ? "hidden" : " grid"
        }`}
      >
        <Card
          title="Product preview card"
          img={ProductPreviewCardImg}
          repoUrl="https://github.com/mate1225/product-preview-card-component"
          liveSiteUrl="https://mate1225.github.io/product-preview-card-component/"
        />
        <Card
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

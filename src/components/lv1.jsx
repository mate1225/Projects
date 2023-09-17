import Cards from "./cards";
//images
import ProductPreviewCardImg from "./images/Product_Preview_Card.png";
import Order_summary_card from "./images/Order_summary_card.png";
function Lv1() {
  return (
    <section className=" text-center ">
      <h2 className=" mb-5  text-[4rem] text-[#1780FC]">level 1</h2>
      <div className=" grid gap-10 lg:grid-cols-2 lg:grid-rows-1">
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

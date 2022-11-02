import React from "react";
import Banner from "../Banner/Banner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import NewProduct from "../NewProduct/NewProduct";
import Review from "../Review/Review";
import Sliders from "../Sliders/Sliders";
import Sponsored from "../Sponsored/Sponsored";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import "./Home.css";


const Home = (props) => {
  const { handleAddToCart, products } = props;

  return (
    <div>
      <Sliders />
      <WhyChooseUs />
      <hr className="container mt-5" />
      <div className="container">
        <FeaturedProduct
          handleAddToCart={handleAddToCart}
          products={products}
        />
      </div>
      <div className="container">
        <NewProduct handleAddToCart={handleAddToCart} products={products} />
      </div>
      <Banner />
      <Review />
      <Sponsored />
    </div>
  );
};

export default Home;

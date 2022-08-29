import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <h6 className="em">
            <em>Are you hungry?</em>
          </h6>
          <h1 className="bold">Don't wait !</h1>
          <div className="order">
            <button className="orderbtn">Order Now</button>
          </div>
        </div>
        <div className="img">
          <img className="" src="/images/pizza.png" alt="pizza" />
        </div>
      </div>
      <div className="productcomponent">
        <Products />
      </div>
    </>
  );
};

export default Home;

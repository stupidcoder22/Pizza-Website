import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
const Singleproduct = () => {
  const [singleproduct, setsingleproduct] = useState();
  const param = useParams()._id;
  useEffect(() => {
    fetch(`https://ecom-rest-apis.herokuapp.com/api/products/${param}`)
      .then((res) => res.json())
      .then((product) => setsingleproduct(product));
  }, [param._id]);

  const navigate = useNavigate();
  return (
    <div className="singleproduct">
      <div className="divbutton">
        <button onClick={() => navigate("/")}>
          <FaArrowLeft color="#f59e0d" />
        </button>
      </div>
      <div className="flex">
        <img src={singleproduct?.image} alt="pizza" />
        <div className="singletext">
          <h1 className="">{singleproduct?.name}</h1>
          <div className="">{singleproduct?.size}</div>
          <div className="">
            <b>₹ {singleproduct?.price}</b>
          </div>
          <div className="addcart">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;

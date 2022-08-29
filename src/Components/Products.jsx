import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://ecom-rest-apis.herokuapp.com/api/products/")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);
  return (
    <>
      <div className="products">
        {products.map((ele) => {
          return <Product ele={ele} key={ele._id} />;
        })}
      </div>
    </>
  );
};

export default Products;

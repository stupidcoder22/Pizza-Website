import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Pizzadata from "../Store/Create";

const Product = (prop) => {
  const { cart, setCart } = useContext(Pizzadata);
  const [btncolor, setbtncolor] = useState(false);
  const { _id, image, name, price, size } = prop.ele;

  const btntimecolor = btncolor ? "green" : "#f59e0d";

  function addtoCart(event, product) {
    event.preventDefault();
    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalitem) {
      _cart.totalitem = 0;
    }

    _cart.totalitem += 1;
    setCart(_cart);
    setbtncolor(true);
    setTimeout(() => {
      setbtncolor(false);
    }, 1000);
  }

  //
  // const cart = {
  //     items: {
  //         '608c2960e165f6137f02b552': 2,
  //         '608c28e8e165f6137f02b550': 3
  //     },
  //     totalItems: 5
  // }
  return (
    <Link to={`/products/${_id}`}>
      <div className="product">
        <div className="productimg">
          <img src={image} alt="pizza" />
        </div>
        <div className="cardtext">
          <h4 className="">{name}</h4>
          <span className="small">{size}</span>
        </div>
        <div className="amount">
          <span>
            <b>₹</b> {price}
          </span>
          <button
            onClick={(e) => addtoCart(e, prop.ele)}
            style={{ backgroundColor: btntimecolor }}
          >
            {btncolor ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;

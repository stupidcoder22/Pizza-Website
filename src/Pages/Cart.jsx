import React, { useContext, useEffect, useState } from "react";
import Pizzadata from "../Store/Create";
import Swal from "sweetalert2";
const Cart = () => {
  const { cart, setCart } = useContext(Pizzadata);
  const [products, setproducts] = useState([]);
  var total = 0;
  useEffect(() => {
    if (!cart.items) {
      return;
    }
    fetch("https://ecom-rest-apis.herokuapp.com/api/products/cart-items", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((product) => setproducts(product));
  }, [cart]);

  function getQuantity(id) {
    return cart.items[id];
  }

  function increment(id) {
    const _cart = { ...cart };
    _cart.items[id] += 1;
    _cart.totalitem += 1;
    setCart(_cart);
  }

  function getsum(id, price) {
    const _cart = { ...cart };
    total = total + _cart.items[id] * price;
    return _cart.items[id] * price;
  }

  function decrement(id) {
    const _cart = { ...cart };
    if (_cart.items[id] < 1) {
      return;
    }
    if (_cart.totalitem < 1) {
      return;
    }
    _cart.items[id] -= 1;
    _cart.totalitem -= 1;
    setCart(_cart);
  }

  function handleDelete(id) {
    const _cart = { ...cart };
    const qunty = _cart.items[id];
    delete _cart.items[id];
    _cart.totalitem -= qunty;
    setCart(_cart);
  }

  function handleOrder() {
    Swal.fire(
      "Good job!",
      "You have placed the order successfully!",
      "success"
    );
    setproducts([]);
    setCart({});
  }

  return products.length ? (
    <div className="cart">
      <h1>
        <b>Cart Items</b>
      </h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product._id}>
              <div className="cartimg">
                <img src={product.image} alt="" />
                <span>{product.name}</span>
              </div>
              <div className="incredecre">
                <button onClick={() => decrement(product._id)}>-</button>
                <b>{getQuantity(product._id)}</b>
                <button onClick={() => increment(product._id)}>+</button>
              </div>
              <div>
                <span>
                  <b>₹ </b> {getsum(product._id, product.price)}
                </span>
              </div>
              <div className="delete">
                <button onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="grandtotal">
        <p>
          Grand Total : <b>₹</b> {total}
        </p>
      </div>
      <div className="ordernow">
        <button onClick={handleOrder}>Order Now</button>
      </div>
    </div>
  ) : (
    <img src="/images/empty-cart.png" alt="" />
  );
};

export default Cart;

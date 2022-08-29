import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Pizzadata from "../Store/Create";
const Navigation = () => {
  const { cart } = useContext(Pizzadata);
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "4px 8px",
    borderRadius: "50px",
  };
  console.log(cart);
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/" className="text-dark">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-dark">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <div style={cartStyle}>
              <span className="total">
                {cart?.totalitem ? cart?.totalitem : "0"}
              </span>
              <img src="/images/cart.png" alt="" />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

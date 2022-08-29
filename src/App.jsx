import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import Pizzadata from "./Store/Create";
import Cart from "./Pages/Cart";
import Singleproduct from "./Pages/Singleproduct";
import Productpage from "./Pages/Productpage";
function App() {
  const [cart, setCart] = useState({});
  useEffect(() => {
    const cartdata = window.localStorage.getItem("cart");
    setCart(JSON.parse(cartdata));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // async function calldata() {
  //   try {
  //     const response = await fetch(
  //       "https://ecom-rest-apis.herokuapp.com/api/products/"
  //     );
  //     const data = await response.json();
  //     setpizzadata(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <Pizzadata.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productpage />}></Route>
          <Route path="/products/:_id" element={<Singleproduct />}></Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Pizzadata.Provider>
  );
}

export default App;

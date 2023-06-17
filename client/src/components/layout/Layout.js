import React, { useEffect } from "react";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { setCart } from "../../redux/cartSlice";

const Layout = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  axios.defaults.headers.common["Authorization"] = auth?.token;
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      const cartItemsParsed = JSON.parse(cartItems);
      dispatch(setCart({ cart: cartItemsParsed }));
    }
  }, []);

  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

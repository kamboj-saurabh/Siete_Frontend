import "./styles.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { useWindowSize } from "./context/useWindowSize";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { LoginPage } from "./components/LoginPage";
import { PrivateRoute } from "./components/PrivateRouter";
import { Profile } from "./private/Profile";
import { Cart } from "./private/Cart";
import { Wishlist } from "./private/Wishlist";
import { Categories } from "./components/Categories";
import { ProductDisplay } from "./components/ProductDisplay";
import { useCart } from "./context/CartProvider";
import { ACTIONS } from "./context/reducerFunction";
import { useEffect } from "react";

export default function App() {
  const [, width] = useWindowSize();
  const {
    state: { toastActive, toastMessage },
    dispatch
  } = useCart();

  useEffect(() => {
    function notify() {
      setTimeout(() => {
        dispatch({ TYPE: ACTIONS.TOGGLE_TOAST, payload: { toggle: false } });
        toast(`${toastMessage}`, {
          className: "toast-class",
          bodyClassName: "toast-body",
          closeButton: false
        });
      }, 1000);
    }

    toastActive && notify();
  }, [toastActive]);

  return (
    <div className="App">
      <Navigation />

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<ProductDisplay />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <PrivateRoute path="/cart" element={<Cart />} />
          <PrivateRoute path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>

      <ToastContainer />

      <Footer />
      {width < 600 && (
        <div style={{ height: "10vh", backgroundColor: "#d4d4d4" }}></div>
      )}
    </div>
  );
}

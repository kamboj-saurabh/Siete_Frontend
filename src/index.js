import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import App from "./App";
import { CartProvider } from "./context/CartProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </Router>,
  rootElement
);

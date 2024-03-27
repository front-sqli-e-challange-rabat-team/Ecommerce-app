import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart-checkout/Cart";
import Checkout from "./components/cart-checkout/Checkout";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Profile from "./components/profile/Profile";
import Home from "./components/Home/home";
import FullPageLayout from "./components/Layouts/FullPageLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <FullPageLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/product-details",
        element: <ProductDetails/>
      }
    ],
  },
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
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
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
]);

export default routes;

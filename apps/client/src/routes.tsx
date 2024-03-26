import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart-checkout/Cart";
import Checkout from "./components/cart-checkout/Checkout";
import FullPageLayout from "./components/Layouts/FullPageLayout";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <FullPageLayout have_DVH_height={true}><Login/></FullPageLayout>
  },
  {
    path: "/register",
    element: <FullPageLayout have_DVH_height={true}><Register/></FullPageLayout>
  },
  {
    path: "/product-details",
    element: <FullPageLayout><ProductDetails/></FullPageLayout>
  }
]);

export default routes;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FullPageLayout from "./components/Layouts/FullPageLayout";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

export default routes

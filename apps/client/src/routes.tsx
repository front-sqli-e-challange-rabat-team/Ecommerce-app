import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FullPageLayout from "./components/Layouts/FullPageLayout";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <FullPageLayout><Login/></FullPageLayout>
  },
  {
    path: "/register",
    element: <FullPageLayout><Register/></FullPageLayout>
  }
]);

export default routes

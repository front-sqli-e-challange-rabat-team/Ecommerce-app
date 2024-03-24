import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FullPageLayout from "./components/Layouts/FullPageLayout";
import Login from "./components/auth/login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <FullPageLayout><Login/></FullPageLayout>
  }
]);

export default routes

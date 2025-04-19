import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <p>welcome home</p>,
        Component: Home,
      },
      {
        path: "/favorite",
        Component: Favorite,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/phone-details",
        Component: PhoneDetails,
      },
    ],
  },
]);
export default router;

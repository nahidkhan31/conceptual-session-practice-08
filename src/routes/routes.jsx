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
        Component: Home,
        hydrateFallbackElement: (
          <p className="text-2xl">Lodaing, please wait......</p>
        ),
        loader: () => fetch("../data.json"),
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
        path: "/phone-details/:id",
        Component: PhoneDetails,
        loader: () => fetch("../data.json"),
      },
    ],
  },
]);
export default router;

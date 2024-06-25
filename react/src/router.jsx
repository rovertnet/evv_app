import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";
import Login from "./views/Login";
import Signup from "./views/Signup";
import GeustLeyaouts from "./component/GeustLeyaouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/surveys",
    element: <Surveys />,
  },
  {
    path: "/",
    element: <GeustLeyaouts />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router
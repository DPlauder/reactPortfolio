import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import RootElement from "./components/RootElement";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

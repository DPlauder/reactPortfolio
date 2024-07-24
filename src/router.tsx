import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import RootElement from "./components/RootElement";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [
        { index: true, element: <Home /> },

        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/sites/Home";
import Projects from "./components/sites/Projects";
import About from "./components/sites/About";
import Contact from "./components/sites/Contact";
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
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

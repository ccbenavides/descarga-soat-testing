import {
    createBrowserRouter, 
  } from "react-router-dom";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/resumen",
      element: <Resume />,
    },
  ]);

  export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root/Root";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Statistics from "./Components/Statistics/Statistics";
import Donation from "./Components/Donation/Donation";
import Errorelement from "./Components/ErrorElement/Errorelement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("donate.json"),
      },
      {
        path: "/navbar",
        element: <Navbar></Navbar>,
      },
      {
        path: "/statis",
        element: <Statistics></Statistics>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

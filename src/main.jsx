import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root/Root";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";

import Statistics from "./Components/Statistics/Statistics";

import Errorelement from "./Components/ErrorElement/Errorelement";
import Details from "./Components/Details/Details";
import Donate from "./Components/Donate/Donate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("/donate.json"),
      },
      {
        path: "/donation",
        element: <Donate></Donate>,
      },

      {
        path: "/statis",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donate.json"),
      },
      {
        path: "/donate/:id",
        element: <Details></Details>,
        loader: () => fetch("/donate.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

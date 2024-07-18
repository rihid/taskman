import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>login</div>
  },
  {
    path: "/board",
    element: <HomePage />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

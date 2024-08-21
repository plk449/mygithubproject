import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.jsx";
import { Home, Followers, Following, RepositoriesPage } from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Followers",
        element: <Followers />,
      },
      {
        path: "Following",
        element: <Following />,
      },
      {
        path: "RepositoriesPage",
        element: <RepositoriesPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

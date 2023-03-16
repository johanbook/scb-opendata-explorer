import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Nav from "./components/ui/Nav";
import Dataset from "./pages/Dataset";
import DatasetList from "./pages/DatasetList";
import LandingPage from "./pages/LandingPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dataset/*",
        element: <Dataset />,
      },
      {
        path: "/metadata/*",
        element: <DatasetList />,
      },
    ],
  },
]);

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}

import { useState } from "react";
import { HomePage } from "./pages/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

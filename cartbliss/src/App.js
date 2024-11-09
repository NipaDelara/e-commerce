import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={customRouter} />
    </>
  );
};

export default App;

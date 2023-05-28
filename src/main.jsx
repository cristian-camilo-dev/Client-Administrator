import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente from "./pages/NuevoCliente";
import Inicio from "./pages/Inicio";

const router = createBrowserRouter([
  { path: "/", 
  element: <Layout />,
  children: [
    { path: "/",
      element: <Inicio />
  },
    { path: "/clientes/nuevo", 
      element: <NuevoCliente /> 

    },
  ]   
},




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

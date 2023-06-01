import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente, { action as nuevoClienteAction} from "./pages/NuevoCliente";
import Inicio, {loader as clienteLoader } from "./pages/Inicio";
import ErrorPages from "./components/ErrorPages";

const router = createBrowserRouter([
  { path: "/", 
  element: <Layout />,
  children: [
    { path: "/",
      element: <Inicio />,
      loader: clienteLoader,
      errorElement: <ErrorPages /> ,
  },
    { path: "/clientes/nuevo", 
      element: <NuevoCliente />,
      action: nuevoClienteAction, 

    },
  ]   
},




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

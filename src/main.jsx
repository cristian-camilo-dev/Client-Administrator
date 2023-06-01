import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";
import Inicio, { loader as clienteLoader } from "./pages/Inicio";
import ErrorPages from "./components/ErrorPages";
import EditarClientes, { loader as editarClienteLoader, action as editarClienteAction} from "./pages/EditarClientes";
import { action as eliminarCliente }  from "./components/Cliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inicio />,
        loader: clienteLoader,
        errorElement: <ErrorPages />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPages />,
      },
      {
        path: "/clientes/:clientesId/editar",
        element: <EditarClientes />,
        action: editarClienteAction,
        loader: editarClienteLoader,
        errorElement: <ErrorPages />,

      },
      {
        path: "/clientes/:clientesId/eliminar",
        action: eliminarCliente,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

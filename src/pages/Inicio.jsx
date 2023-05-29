import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = [
    {
      id: 1,
      nombre: "Juan",
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 2,
      nombre: "Karen",
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 3,
      nombre: "Josue",
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: "Codigo Con Juan",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: "Codigo Con Juan",
    },
  ];
  return { clientes };
}

const Inicio = () => {
  const data = useLoaderData();

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900 ">Clientes</h1>
      <p className="text-sm text-gray-700">
        Desde aquí puedes administrar los clientes
      </p>
      {data.clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white ">
            <tr className="text-white">
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.clientes.map((cliente) => (
             <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-5 text-center text-2xl">No hay clientes</p>
      )}
    </>
  );
};

export default Inicio;

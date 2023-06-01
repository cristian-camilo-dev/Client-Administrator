import { useLoaderData } from "react-router-dom";
import { obtenerclientes } from "../data/clientes"
import Cliente from "../components/Cliente";


export function loader() {
    const clientes =  obtenerclientes();
    
    return clientes
}

const Inicio = () => {
  const data = useLoaderData();
  
  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900 ">Clientes</h1>
      <p className="text-sm text-gray-700">
        Desde aquí puedes administrar los clientes
      </p>
        {data.length
      ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white ">
            <tr className="text-white">
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((cliente) => (
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

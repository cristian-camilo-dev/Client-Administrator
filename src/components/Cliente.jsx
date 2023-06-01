//importar prop-types
import PropTypes from "prop-types";
import { eliminarCliente } from "../data/clientes";
import { useNavigate, Form, redirect } from "react-router-dom";


export async function action({  params }) {

  //eliminar el cliente
  

  await eliminarCliente(params.clientesId);

  //redireccionar

  return redirect("/");

}

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono } = cliente;
 

  return (
    <tr className="border">
      <td className=" px-4 py-2">
        <p className="text-lg text-gray-800">{nombre}</p>
        {empresa && <p className="text-gray-600">{empresa}</p>}
      </td>
      <td className=" px-4 py-2">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Teléfono:</span>{" "}
          {telefono}
        </p>
      </td>
      <td className=" px-4 py-2 flex justify-center items-center">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 upeprcase text-xs font-bold "
          onClick={() => navigate(`/clientes/${cliente.id}/editar`) }
        >
          Editar
        </button>
        <Form 
          method="POST"
          action={`/clientes/${cliente.id}/eliminar`}
          >
        <button
          type="submit"
          className="text-red-600 hover:text-red-700 upeprcase text-xs font-bold ml-2"
        >
          Eliminar
        </button>
        </Form>

      </td>
    </tr>
  );
};

Cliente.propTypes = {
  cliente: PropTypes.object.isRequired,
};

export default Cliente;

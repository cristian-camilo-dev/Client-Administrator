//importar prop-types
import PropTypes from "prop-types";

const Cliente = ({ cliente }) => {
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
        >
          Editar
        </button>
        <button
          type="button"
          className="text-red-600 hover:text-red-700 upeprcase text-xs font-bold ml-2"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

Cliente.propTypes = {
  cliente: PropTypes.object.isRequired,
};

export default Cliente;

import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Errores from "../components/Errores";
import { agregarCliente } from "../data/clientes";

export async function action({ request }) {
  const formData = await request.formData(); // FormData es un objeto que permite crear un conjunto de pares clave/valor que representan campos de un formulario
  const data = Object.fromEntries(formData); // Object.fromEntries() convierte un objeto en una matriz de pares clave-valor
  
  const email =  formData.get("email");
  
  //validar los datos

  const errores = [];
  
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!regex.test(email)) {
    errores.push({ texto: "Email no válido" });
  }


  if (Object.values(data).includes("")) {
    errores.push({ texto: "Todos los campos son obligatorios" });
  }

  if (Object.keys(errores).length) {
    return errores
  }

  //agregar el cliente

  await agregarCliente(data);

  //redireccionar

  return redirect("/");
  
}

export default function NuevoCliente() {
  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-bold text-4xl text-blue-900 ">Clientes</h1>

      <p className="text-sm text-gray-700">
        Llena todos los campos para crear un nuevo cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20 ">
        {errores?.length ?
          errores.map((error, i) => <Errores key={i}>{error.texto}</Errores>): []}
        <Form method="POST"
          noValidate  
        >
          <p className="text-gray-800 text-xl mb-3">Formulario</p>
          <Formulario />
          <input
            type="submit"
            className="bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-blue-900"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
}

import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();

    const isInicio = location.pathname === '/';
    const isNuevoCliente = location.pathname === '/clientes/nuevo';

    
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-white text-4xl font-black text-center uppercase">
          CRM Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`p-1 text-white block ${isInicio && 'bg-yellow-500 text-gray-900'}`}
            to="/"
          >
            Clientes
          </Link>
          <Link
            className={`p-1 text-white block ${isNuevoCliente && 'bg-yellow-500 text-gray-900'}`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </aside>
      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

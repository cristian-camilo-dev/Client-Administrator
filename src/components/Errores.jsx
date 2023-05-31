import PropTypes from "prop-types";

const Errores = ({ children }) => {
  return (
    <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
        {children}
    </div>
  )
}

Errores.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Errores
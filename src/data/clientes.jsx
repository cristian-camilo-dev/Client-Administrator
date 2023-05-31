export async function  obtenerclientes (){
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resutado = await respuesta.json();
    
    return resutado;

}
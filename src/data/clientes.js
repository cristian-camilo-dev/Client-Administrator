export async function  obtenerclientes (){
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resutado = await respuesta.json();
    
    return resutado;

}


export async function agregarCliente(datos){
    try {
        const respuesta =  await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error);
    }
}
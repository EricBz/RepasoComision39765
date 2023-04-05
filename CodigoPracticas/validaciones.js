//- Array productos donde cargaremos cada producto (cada producto será un objeto.)
const productos = []
// 1 - Mando cada variable, cada variable pasará por el if para validar que esté completo.
const addProducts = (param1, param2, param3) => {
    const product = {
        param1,
        param2,
        param3
    }

        (!param1 || !param2 || !param3) ? console.log("Por favor complete todos los campos.") : productos.push(producto)
}

// 2 - Mando cada variable, con object values se transformará en un array con los valores del objeto que 
// formamos, luego con el método "some" buscamos si alguno está "undefined".
const addProducts2 = (param1, param2, param3) => {
    const product = {
        param1,
        param2,
        param3
    }

    const validacion = Object.values(product)
    const vacio = validacion.some(element => element === undefined)
    // Debajo decimos; si no está vacio cargalo al array, caso contrario (:) pedí que carguen todos los datos.   
    !vacio ? productos.push(product) : console.log("Por favor complete todos los campos.")
    console.log(productos)
}

const addProducts3 = (param) => {
    //El objeto ya lo formamos nosotros fuera, o nos viene determinado. Usamos el caso anterior o un bucle.   
    const validacion = Object.values(param)
    const vacio = validacion.some(element => element === undefined)
    !vacio ? productos.push(product) : console.log("Por favor complete todos los campos.")
    console.log(productos)
}

//addProducts3({ name: "Max", surname: "Power" })

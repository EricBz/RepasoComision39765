//Un array con objetos, que son productos.
const productos = [
    {
        id: 1,
        title: "Celular",
        price: 10
    },
    {
        id: 2,
        title: "Notebook",
        price: 100
    }
]
// 1 - En esta función nosotros desarmamos el objeto y le pasamos las propiedades que queremos a una tercera,
// se usaría si tenemos que dejar algunas por defecto sin tocar. 
const updateProduct1 = (id, prods) => {
    const indexSeleccionado = productos.findIndex(element => element.id == id)
    //El if lo usamos para verificar si ese id existe, sabiendo que si no existe findIndex nos retornará -1.
     if (indexSeleccionado != -1) {
    const objOriginal = productos[indexSeleccionado]
    const prodNuevo = {}
    prodNuevo.id = objOriginal.id
    prodNuevo.title = prods.title
    prodNuevo.price = prods.price
    productos[indexSeleccionado] = prodNuevo
    console.log(productos)} else {
    console.log("Id no existente.") }
}

const prods = {title:1, price:1}
//updateProduct1(1, prods)

//2 - En esta función ahorramos mucho código usando destructuring y pasando los atributos directamente,
// al menos aquellos que estén para suplantarse.
const updateProduct2 = (id, prods) => {
    const indexSeleccionado = productos.findIndex(element => element.id == id)
    if (indexSeleccionado != -1) {
    const objOriginal = productos[indexSeleccionado]
    const prodNuevo = {...objOriginal, ...prods} 
    productos[indexSeleccionado] = prodNuevo
    console.log(productos)} else {
        console.log("Id no existente.")
    }   
}

//updateProduct2(1, prods)

const updateProduct3 = (id, prods) => {
    const indexSeleccionado = productos.findIndex(element => element.id == id)
    if (indexSeleccionado != -1) {
        //Acá vemos uno de los métodos de Object, assing que copia las propiedades de un objeto dado en otro
        //las que no están las mantendrá como el objeto original.
        const prodNuevo = Object.assign(productos[indexSeleccionado], prods)
        productos[indexSeleccionado] = prodNuevo
        return console.log(productos)
    } else {
        console.log("Id no existente.")
    }
}

//updateProduct3(1, prods)

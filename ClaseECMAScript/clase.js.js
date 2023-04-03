//1 - Creamos la clase
class Manejador {
    constructor() {
        this.products = [] //2 - Aqui se introduciran luego los productos que ingresemos, es un array vacio.
    }
//3 - addProducts nos pedira ingresar varios parámetros.
    addProducts = (title, price, code, stock) => {
//4 - Con esos parámetros crearemos un objeto, ese que esta debajo, llamano "product"
        const product = {
            title,
            price,
            code,
            stock
        }
//5 - Le añadiremos un id incrementable, si el array products está vacio, el id será "1", sino será ese último +1
//ej, si es 4, será 5, etc.
        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }
//6 - Ahora vienen las validaciones, en primer término con el if pediremos que todos los parámetros estén completos.
        const codigo = this.products.find(element => element.code == code)
//7 - Como nos piden un code que no se repetira, con el método find que busca un elemento dentro del array señalado.
        if (!title || !price || !code || !stock) {
            console.log("Por favor incluya todos los parámetros")
        } else if (codigo) {
            console.log("Recuerde ingresar un 'code' diferente.")
        } else {
            this.products.push(product);
        }
    }

    getProducts = () => {
        return this.products
    }

    getProductByID = (id) => {
//8 - Usamos el método find para buscar un elemento dentro del array ya que si no lo tenemos no dará "undefined"  
//por lo que pasará al bloque "else".      
        const ver = this.products.find(product => product.id == id)
            if (ver) {
                console.log(ver)
            } else {
                console.error("Poducto no encontrado.")
            }
            console.log(ver)
    }
}
//Esta clase es simple, pueden adicionarse muchas cosas más, como validaciones, etc. Pero esta es la estructura
//básica.

//CÓMO USAMOS LA CLASE?
//A - La instanciamos para crear un objeto.
const producto = new Manejador()
//B - Usamos sus métodos partiendo del objeto creado en la instancia.
producto.addProducts("notebook", 200000, "fjds", 20)
//C - Si tenemos que ingresar algún valor lo hacemos como con cualquier otra función, recordar que un método en 
//una clase no es más que eso; una función más.
producto.getProductByID(10)

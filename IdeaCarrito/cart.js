//Carrito que suma las cantidades de los productos de a uno.
/*
Modelo de array con carritos, cada carrito es un objeto que dentro contiene otro array que son productos.
[
    {
        products: [],
        cid: 1
    },
    {
        products: [],
        cid: 2
    }
]*/
//Quantity seria necesario solo si podriamos tomas otros valores diferentes a 1 y luego podriamos sumarlos.
const add = async (cid, pid, quantity = 1) => {
    const data = await fs.promises.readFile(this.path,'utf-8');
    const carts = JSON.parse(data);
    //Buscamos el index del carrito
    const index = carts.findIndex(element => element.id == cid)
    //Buscamos el index del producto que tenga el mismo pid de producto que queremos cambiar
    const productoSelecionado = carts[index].products.findIndex(element => element.pid == pid)
    //Aca tomamos el valor de quantity del producto
    const quantityUltima = carts[index].products[productoSelecionado].quantity
    //Nuevo objeto que suplantara el viejo carrito pero con una cantidad nueva.
    const obj = {}
    obj.quantity = quantityUltima +1
    obj.pid = pid
    carts[index].products[productoSelecionado].quantity = obj.quantity 
    //De esta manera vamos a filtrar los productos que quedaron con quantity vieja.
    carts[index].products.filter(element => element != obj)
    //Luego copiamos el cart de ya con todo modificado.
    await fs.promises.writeFile(this.path,JSON.stringify(carts,null,'\t'));
}


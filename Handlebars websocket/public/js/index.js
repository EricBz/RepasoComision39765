//Para usar del lado del cliente
const socket = io()
//Prueba de mensajes entre servidor/cliente y cliente/servidor.
socket.emit('message', 'Este es un mensaje desde el cliente.')
socket.on("saludo", data => console.log(data))
socket.on("saludoind", data => console.log(data))

//Tomo los datos el form a través de está fn.
const enviar = () => {
    event.preventDefault()
    const name = document.querySelector("#ingreso").value
    const age = document.querySelector("#age").value
    //Armo el obj a enviar
    const valor = {name: name, age: age}
    //Esta es la url donde haremos el fetch
    let url = 'http://localhost:8080/mandar';
//Agrego la url, selecciono el method deseado, en este caso POST
fetch(url, {
  method: 'POST',
  body: JSON.stringify(valor), 
  headers:{
    'Content-Type': 'application/json'
  }
})
.then(response => console.log('Success:', response))
.catch(error => console.error('Error:', error))
   // socket.emit("datoenviado", valor)
}

//Con esta fn renderizo en el front. Puedde usarse un forEach también.
const render = (data) => {
    const html = data.map((element, index) => {
        return( `<h3>Nombre: ${element.name} - Edad: ${element.age}</h3>`)
    })
    document.getElementById("prueba").innerHTML = html
}

socket.on("act", (data) => { render(data) })
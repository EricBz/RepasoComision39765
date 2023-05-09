import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import { Server } from "socket.io"
//Tomamos algunos datos los que se agreguen solo persistiran en memoria, asi como las operaciones que hagamos.
import users from "./data/users.js"
import Manager from "./manager/userManager.js"
const usuarios = new Manager()

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//Configuracion motor de handlebars y carpetas.
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
//Configuracion para archivos estaticos
app.use(express.static(__dirname+"/public"))
//Para usar websocket necesitaremos usar http server, lo configuramos:
const server = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
const io = new Server(server)

//Middleware desde donde compartimos el socket con toda la app.
app.use((req, res, next) => {
    req.io = io
    next()
})

app.get("/", (req, res) => {
    //dentro de res usaremos el metodo render.
    return res.render("body")
})

//Esta ruta funciona sin websocket.
app.get("/usuarios", async (req, res) => {
    console.log(users)
    //Debe enviarse en un objeto.
    res.render("users", {users})
})

//Esta ruta solo se encarga de enviar datos y los actualiza usando el middleware.
app.post("/mandar", (req, res) => {
    console.log(req.body)
    usuarios.addUser(req.body)
    const actualizado = usuarios.getUsers()
    req.io.emit("act", actualizado)
})

//Asi enviamos datos por el socket. establecemos conexion. En este caso solo unos saludos de prueba entre cliente servidor.
io.on('connection', socket => {
    console.log("Usuario conectado...")
    //on, recibe y emit, emite o envia.
    socket.on('message', data => console.log(data))
    socket.emit('saludoind', 'Este es un mensaje ind.')
    io.emit("saludo", "Este es un mensaje del server para todos los usuarios.")
    socket.on("datoenviado", data => {
        console.log(data)
        usuarios.addUser(data)
    })
    socket.emit("actualizacion", usuarios.getUsers())
})




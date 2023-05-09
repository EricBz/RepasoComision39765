import users from "../data/users.js"

export default class Manager {
    constructor () {
        this.data = users
    }
    getUsers = () => {
        return this.data
    }
    addUser = (user) => {
        this.data.push(user)
    }
    deleteUser = () => {
        this.data.pop()
    }
}

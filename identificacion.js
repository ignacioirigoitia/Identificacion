/* IDENTIFICACION
Crear una función que reciba dos parámetros: 'user' y 'password'. Usando SWITCH
mostrar en consola los siguientes mensajes, según corresponda:
1.- "Bienvenido a nuestro sitio!", (si el usuario es "admin" y la contraseña es 1234)
2.- Contraseña incorrecta
3.- Usuario incorrecto
4.- Usuario y Contraseña incorrectos
5.- Debe ingresar los datos requeridos */



function identificacion(user, password){
    switch (true) {
        case user === "admin" && password === 1234:
            console.log("Bienvenido a nuestro sitio!")
            break;
        case user === "admin" && password !== 1234:
            console.log("Contraseña Incorrecta")
            break;
        case user !== "admin" && password === 1234:
            console.log("Usuario Incorrecto")
            break;
        case user === null && password === null:
            console.log("Debe ingresar los datos requeridos")
            break;
        default:
            console.log("Usuario y Contraseña incorrectos")
            break;
    }
}

identificacion("admin", 1234)


const destinos = [
    'Suba',
    'Soacha',
    'Tocancipa',
    'Bosa',
    'Lisboa',
    'Patio Bonito'
]

document.getElementById(`button-random`).addEventListener('click',
function(){

    const randomText = Math.floor(Math.random() * destinos.length)

    document.getElementById('texto').textContent = destinos[randomText]
  
})
//creando cookie
function crearCookie(nombre, valor,dias ){
var fecha = new Date();
fecha.setTime(fecha.getTime() + (dias*24*60*60*1000));
var expiracion = "expires="+fecha.toUTCString();
document.cookie = nombre+"="+valor+";"+expiracion+";path=/";
}

crearCookie("usuario", "Santiago", 15);

function leerCookie(nombre) {
    var nombreEQ = nombre + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(nombreEQ) == 0) {
            return cookie.substring(nombreEQ.length, cookie.length);
        }
    }
    return null;
}

// Leer la cookie "usuario"
var valorUsuario = leerCookie("usuario");
console.log(valorUsuario); // Debería mostrar "John Doe"



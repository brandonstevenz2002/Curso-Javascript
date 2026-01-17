var $a = 0

console.log($a)

var _a = 2

console.log(_a)




var arbol = "Arbol"

function arbol() {

}


const UNA_CONSTANTE = "Soy una constante"
PI = 3.14

class SerHumano {
    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }

    miNombreEs() {
        return 'Mi nombre es ' + this.nombre
    }
}



let unaCadena = "Hola mundo",
    unNumero = 19,
    unBoolean = true

function holaMundo(nombre) {
    alert("Hola " + nombre)
}
holaMundo("Jhonatan")

const ajax = new XMLHttpRequest(),
    jon = new SerHumano('Jonathan', 'Hombre')
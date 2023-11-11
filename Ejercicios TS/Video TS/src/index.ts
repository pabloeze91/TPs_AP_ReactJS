let mensaje: string = "Hola mundo"

mensaje = "chanchito feliz"

mensaje = "chao mundo"
console.log(mensaje)
console.log(typeof [])

/* 
Tipos nativos de JS
* number
* string
* boolean
* null
* undefined
* object
* function

Tipos que agrega TS
* any (no usarlo)
* unknown
* never
* arrays
* tuplas
* Enums

*Existe una funcionalidad de TS que se llama los tipos inferidos, esto quiere decir que cuando nosotros inicialicemos una variable, TS va a saber qué tipo de variable es
*/

let extincionDinosaurios = 76_000_000 //separamos con _ para que sea más fácil de leer
let dinosaurioFavorito = "T-Rex"
let extintos = true

//Tipado inferido significa que no es necesario que nosotros le indiquemos el tipo a cada una de las variables siempre y cuando las estemos inicializando ya que TS va a ser lo suficientemente inteligente para detectar qué tipo de dato es cada una. Si no inicializamos el valor, indica que la variable es del tipo any.

let mivariable
mivariable = "chanchito feliz"
mivariable = 42

//En este caso, no nos está entregando ningún error porque el tipo any nos permite que nosotros podamos asignarle el valor que queramos y luego que lo podamos cambiar en un futuro y esto elimina completamente el propósito de estar utilizando TS. Así que lo que nosotros tenemos que hacer siempre es asignarle un tipo de dato a una variable y en el caso que nosotros vayamos a inicializar esa variable, no sería necesario colocar el tipo.

//Colocamos any de manera explícita para que no de error
function chanchitoFeliz(config: any) {
return config
}

let animales = ["chamchito", "feliz", "felipe"]
let nums: number[] = [1,2,3]
//let nums2 = [] //si colocamos el mouse encima indica que es un arreglo que puede contener cualquier tipo de dato (any), entonces tenemos dos alternativas, la inicializamos con un valor o le asignamos un tipo de dato
let checks: boolean[] = []
//Definimos el tipo de dato arreglo con el método alternativo
let nums2: Array<number> = [] //arreglo de números

//.map en JS nos permite iterar los elementos de un arreglo y aplicarles una función
//animales.map(x => x.) //No vamos a tener que estar adivinando los métodos que tiene cada objeto porque el autocompletado sugiere métodos del tipo de dato

let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]] //el primer valor es un number y el segundo un arreglo de strings

//Ejemplo con talles para utilizar los enums

const chica = "s"
const mediana = "m"
const grande = "l"
const extragrande = "xl"

enum Talla { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" }

const variable1 = Talla.Grande
console.log(variable1)

//Un caso un poco más realista para utilizar los enums con estados de carga

const enum LoadingState { Idle, Loading, Success, Error } //se coloca const antes del enum para que se genere un código más optimizado o reducido y de esta manera solamente se le van a empezar los valores en el código final de JS siempre y cuando nosotros creemos constantes o variables que contengan algún valor dentro de nuestro enum

const estado = LoadingState.Success

//Creamos un objeto (haciendo uso del inferido) que contiene un id con valor 1
//const objeto = { id: 1, nombre: "" }
//objeto.nombre = "Hola Mundo" //en JS estos objetos son dinámicos entonces podríamos colocarle un nombre pero dentro de TS es inválido. Si quisieramos agregarle la propiedad de nombre, tendríamos que inicializarlo con un string o un string vacío

//Otra forma (tipado explícitamente)
/* const objeto: {
    readonly id: number, //readonly para que no pueda ser cambiado, solo puede ser de lectura
    nombre: string, // Podemos indicar un valor inicial (string o string vacío) a la propiedad de nombre o colocar el signo de preguntas al final del nombre de la propiedad para que sea opcional y no va a ser necesario inicializarla en las otras {}. Termina solucionando el error de la primera forma
    talla: Talla, //usamos el enum que definimos antes
} = { id: 1, 
    nombre: "Hola Mundo", 
    talla: Talla.Mediana 
} */

//Este objeto que hemos creado después vamos a poder cambiarle el valor de sus propiedades
//objeto.id = 42 //da error por el readonly 

//Otra forma más ordenada para poder hacer uso del tipo de Persona en cualquier otro objeto que nosotros vayamos a agregar
type Direccion = {
        numero: number,
        calle: string,
        pais: string
    }
type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion
} 

const objeto: Persona = { id: 1, 
    nombre: "Hola Mundo", 
    talla: Talla.Mediana,
    direccion: {
        numero: 1,
        calle: "Siempre viva",
        pais: "Chanchitolandia"
    } 
} 

const arr: Persona[] = [] //Arreglo que va a contener solamente objetos pero los objetos que nosotros definamos o queremos que éste tenga
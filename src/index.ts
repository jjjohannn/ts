// let nombre: string = "Juan";
// nombre = "chanchito feliz"

// console.log(nombre);

// nombre = "chanchito triste";


// //tipos nativos de JS
// /**
//  * number
//  * string
//  * boolean
//  * null
//  * undefined
//  * object
//  * function
//  */

// //tipos de TS
// /**
//  * any          tratar de no usar
//  * uunknown
//  * never
//  * arrays
//  * tuplas
//  * enums
//  *
//  * tipos inferidos
//  */



// //estas variables estan inicializadas con un valor por lo tanto no es necesario declarar el tipo de dato
// let extincionDinosaurios: number = 76_000_000;
// let dinosaurioFavorito: string = "T-rex";
// let extintos: boolean = true;

// //variable de tipo eny puede ser cualquier tipo de dato
// // let miVariable;
// // miVariable = 5;
// // miVariable = "hola mundo";

// // funcion usando any
// function chanchitoFelix(config: any) {
//     return config
// }

// //tipo inferido
// let animales = ["chancho", "gallina", "perro"];
// //tipo no inferido
// let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let checks: boolean[] = [true, false, true, false];
// let num2: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //map permite iterar un array y aplicarles una funcion
// // animales.map(a=>a.toUpperCase());
// // num.map(n=>n.toString());

// //tuplas para almacenar datos ordenados
// //id,nombre,habilitado
// let tupla: [number, string, boolean] = [1, "juan", true];
// let tupla2: [number, string[]] = [1, ["hola", "mundo"]];

// //error en TS
// //tupla.push(2);

// //enum  constantes para referenciar
// enum Talla {
//     Chica = "s",
//     Mediana = "m",
//     Grande = "l",
//     ExtraGrande = "xl"
// }

// let variable = Talla.Chica;
// console.log(variable);
// // enum con estados de API
// const enum LoadingState {
//     Idle,
//     Loading,
//     Success,
//     error
// }

// const estado = LoadingState.Success;

// const objeto = {
//     id: 1,
//     nombre: "Juan",
// }
// //para que los valores de las propiedades no cambien usar= readonly
// const objeto2: { readonly id: number, nombre: string, talla: Talla } = {
//     id: 1,
//     nombre: "Juan",
//     talla: Talla.Chica,
// }

// //objeto2.id = 2; no se puede asignar un nuevo valor a una propiedad de solo lectura
// // objeto2.id = 42;

// //a este objeto si se le puede asignar un nuevo valor a la propiedad id
// // objeto.id = 42;

// //type
// type Direccion = {
//     calle: string,
//     pais: string
// }
// type Persona = {
//     id: number,
//     nombre: string,
//     apellido: string,
//     edad?: number,
//     direccion: Direccion
// }
// const objeto3: Persona = {
//     id: 1,
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 22,
//     direccion: {
//         calle: "calle falsa",
//         pais: "Argentina"
//     }
// }

// //un arreglo de personas
// const arr: Persona[] = [];

// //funciones

// const fn: () => number = () => {
//     let x = 2
//     if (x > 5) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// //otra forma de declarar una funcion
// // function fn1(){

// // }

// const fn2: (x: number) => string = (edad) => {
//     if (edad > 18) {
//         return "es mayor de edad"
//     }
//     return "es menor de edad"
// }

// function validaEdad(edad: number, msg: string = 'chachito feliz'): string {
//     if (edad > 18) {
//         return `es mayor de edad ${msg}`
//     }
//     return "es menor de edad"

// }

// validaEdad(19, "wena");

// //never funciones que despachan errores o que nunca retornan nada
// function error(): never {
//     throw new Error("error de usuario");
// }

// //union types

// let puntaje: number | string = 98;

// puntaje = "98";


// type Animal = {
//     id: number,
//     estado: string
// }

// type Usuario = {
//     id: number,
//     nombre: string
// }

// let animal: Animal | Usuario = { id: 1, estado: "feliz", nombre: "" };

// function sumaDos(n: number | string): number {
//     if (typeof n === "number") {
//         return n + 2;
//     }
//     return parseInt(n) + 2;
// }

// //insertion types

// type Audit = {
//     crates_ad: string,
//     modifed_at: string,
// }

// type Product = {
//     nombre: string,
// }

// //este objeto debe tener la propiedades de los dos tipos
// const procduct: Product & Audit = {
//     nombre: "",
//     crates_ad: "",
//     modifed_at: "",
// }


// //literal types

// type Fibo = 0 | 1 | 2 | 3 | 5

// const nDeFibo: Fibo = 0;

// //nullables types
// function toNumber(s: string | null | undefined) {
//     if (s) {
//         return parseInt(s);
//     }
//     return 0;
// }

// const n = toNumber(null);

// //optional chaining

// function getUser(id: number) {
//     if (id < 0) {
//         return null;
//     }
//     return {
//         id: 1,
//         nombre: "juan",
//         created_at: new Date()
//     }
// }

// const user = getUser(-1);
// console.log(user?.nombre);

// const arr1 = null;
// console.log(arr1?.[0]);

// //nullish coalescing operator

// const dificulty: number | null = 0;

// const user2 = {
//     username: "juan",
//     dificulty: dificulty ?? 1,
// }

// //type assertions
// //usarlo cuando estamos muy seguros del tipo de dato que estamos recibiendo
// const elem: any = null;

// const elem1 = elem as number

// const input = document.getElementById("input") as HTMLInputElement;

// //type narrowing

// function lala(x: number | string) {
//     //type narrowing
//     if (typeof x === "number") {
//         x.toString();
//     }
//     if (typeof x === "string") {
//         x.toUpperCase();
//     }
// }

// //type unknown
// //es como any pero mas seguro

// function procesa(algo: unknown) {
//     if (typeof algo === "string") {
//         return algo.toUpperCase();
//     }
//     if (typeof algo === "number") {
//         return algo.toString();
//     }

//     if (algo instanceof String) {
//         return algo.toUpperCase();
//     }
//     return "";
// }




class Personaje {
    readonly id: number;
    name: string;
    nivel: number;
    private hp: number;
    profesion?: string;
    constructor(id: number, name: string, nivel: number, hp: number) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }

    subirNivel() {
        this.nivel++;
        return this.nivel;
    }
    cambiarHp(hp: number) {
        this.hp = this.hp + hp;
        return this.hp;
    }

    get hp1(): number {
        return this.hp;
    }

}

const personaje = new Personaje(1, "juan", 1, 100);


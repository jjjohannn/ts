"use strict";
let nombre = "Juan";
nombre = "chanchito feliz";
console.log(nombre);
nombre = "chanchito triste";
let extincionDinosaurios = 76000000;
let dinosaurioFavorito = "T-rex";
let extintos = true;
function chanchitoFelix(config) {
    return config;
}
let animales = ["chancho", "gallina", "perro"];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let checks = [true, false, true, false];
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tupla = [1, "juan", true];
let tupla2 = [1, ["hola", "mundo"]];
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
let variable = Talla.Chica;
console.log(variable);
const estado = 2;
const objeto = {
    id: 1,
    nombre: "Juan",
};
const objeto2 = {
    id: 1,
    nombre: "Juan",
    talla: Talla.Chica,
};
const objeto3 = {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 22,
    direccion: {
        calle: "calle falsa",
        pais: "Argentina"
    }
};
const arr = [];
const fn = () => {
    let x = 2;
    if (x > 5) {
        return 0;
    }
    else {
        return 1;
    }
};
const fn2 = (edad) => {
    if (edad > 18) {
        return "es mayor de edad";
    }
    return "es menor de edad";
};
function validaEdad(edad, msg = 'chachito feliz') {
    if (edad > 18) {
        return `es mayor de edad ${msg}`;
    }
    return "es menor de edad";
}
validaEdad(19, "wena");
function error() {
    throw new Error("error de usuario");
}
let puntaje = 98;
puntaje = "98";
let animal = { id: 1, estado: "feliz", nombre: "" };
function sumaDos(n) {
    if (typeof n === "number") {
        return n + 2;
    }
    return parseInt(n) + 2;
}
const procduct = {
    nombre: "",
    crates_ad: "",
    modifed_at: "",
};
const nDeFibo = 0;
function toNumber(s) {
    if (s) {
        return parseInt(s);
    }
    return 0;
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        nombre: "juan",
        created_at: new Date()
    };
}
const user = getUser(-1);
console.log(user === null || user === void 0 ? void 0 : user.nombre);
const arr1 = null;
console.log(arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
//# sourceMappingURL=index.js.map
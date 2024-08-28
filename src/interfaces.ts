//interfaces para las clases y type para lo demas

interface animal {
    nombre: string;
    edad: number;
    tipo: string;
    ruido(): void;
}

class caballo implements animal {
    nombre: string;
    edad: number;
    tipo: string;
    constructor(nombre: string, edad: number, tipo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    ruido(): void {
        console.log("neigh");
    }
}

class cerdo implements animal {
    nombre: string;
    edad: number;
    tipo: string;
    constructor(nombre: string, edad: number, tipo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    ruido(): void {
        console.log("oink");
    }
}

//index signature

class DiccionarioUsuarios {
    [id: string]: string;
}

let diccionarioUsuario = new DiccionarioUsuarios();
diccionarioUsuario["1"] = "Juan";
diccionarioUsuario["2"] = "Pedro";
diccionarioUsuario["3"] = "Maria";

console.log(diccionarioUsuario);
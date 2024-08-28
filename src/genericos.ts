// function log<T>(a: T, b: T) {
//     return console.log(a, b);
// }

// log<number>(2, 4)
// log<string>('hola', 'ctm')

async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}
type User = {
    id: number,
    name: string,
    email: string,
    address: {
        street: string,
        city: string,
        zipcode: string
    }
}

const user = fetchData<User>('/users')


type Computador = {
    ram: string,
    procesador: string,
    disco: string
}
class Programador<T>{
    computador: T;
    constructor(t: T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({ ram: '3', procesador: 'intel 9', disco: 'ssd 1t' })
const programador1 = new Programador<string>('wena ')


// genericos en interfaces
interface KeyValue<T, V> {
    Key: T,
    Value: V
}
interface Product {
    is: string
}
// function fetchProduct(): KeyValue<string, Product> {
//     return {
//         key: 'id de producto',
//         value: { id: 90 }
//     }
// }

// function fetchStock(): KeyValue<string, number> {
//     return {
//         key: "id de producto",
//         value: 9000
//     }
// }


//contraints (restricciones)
interface Usuario {
    id: number,
    name: string
}

function print<T extends Usuario>(t: T): T {
    console.log(t);
    return t
}

class Estado<T>{
    protected data: T[] = [];

    agregar(t: T): void {
        this.data.push(t)
    }

    getEstado(): T[] {
        return this.data
    }
}

type ObjectId = {
    id: string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T> {
    eliminar(id: string) {
        this.data = this.data.filter(x => x.id !== id)
    }
}

//generico fijo
class EstadoUsuarios extends Estado<Usuario>{
    reiniciarContrasenia() {
        //logica
    }
}


//keyOf
type Calendar = {
    id: number,
    fuente: string,
    dueno: string,
}

const calendar: Calendar = { id: 1, fuente: 'sadd', dueno: 'd' }

function getProp<T>(objeto: T, property: keyof T): unknown {
    return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
//getProp<Calendar>(calendar,'jijij')


//utility types

type Punto = {
    x: number,
    y: number,
    desc?: string
}
//LAS PROPIEDADES SON OPCIONALES 
type PuntoOptional = Partial<Punto>

// LAS PROPIEDADES SON OBLIGATORIAS
type PuntoOptional1 = Required<Punto>



const keyVal: Record<string, number> = {
    'soy un string': 3
}

type kv = { [key: string]: number }

const p: Omit<Punto, 'de' | 'y'> = {
    x: 1,
    //y:3
}

const p1: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 2
}

const readonlyp: Readonly<Punto> = {
    x: 1,
    y: 4,
    desc: 'ewr'
}


//readonlyp.desc=''
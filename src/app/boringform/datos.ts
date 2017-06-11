/*
 * Aquí declaro los tipos de datos ayudar a la programación del servicio
 * Puedo utilizar interface cuando solo declaro el formato
 * */

export interface Maestro {
    id: number;
    title: string;
}

// extiendo la interface Maestro
export interface MaestroConTag extends Maestro {
    tag: number;
}

export interface TransferenciaModel {
    fecha: Date;
    importe: number;
    tipo: number;
    categoria: number;
    title?: string;
}

export class Transferencia implements TransferenciaModel {
    constructor(
        public fecha: Date,
        public importe: number,
        public tipo: number,
        public categoria: number,
        public title?: string ) {

        }
}

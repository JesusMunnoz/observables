import { Usuario } from "./usuario";

export class Respuesta 
{
    constructor(public error: boolean, 
                public codigo: number,
                public mensaje: string,
                public data: Usuario){}
}

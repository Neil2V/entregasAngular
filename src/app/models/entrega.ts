export class Entrega {
    nombreEntrega?: String;
    precio: number;

    constructor(nombreEntrega: String, precio: number){
        this.nombreEntrega = nombreEntrega;
        this.precio = precio;
    }
}

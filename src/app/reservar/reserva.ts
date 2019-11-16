import {Hotel, Hab} from '../class/hotel/hotel';

export class reserva{
    nombre:string;
    apellido:string;
    cedula:number;
    email:string;
    telefono:number;
    direccion:string;
    estatus:string;
    itinerario: itinerario[];
    localizador:string;
}

export class itinerario{
localizador:string;
hotelId:string;
fechaLlegada:Date;
fechaSalida:Date;
hab: Hab;
costo:number;
numeroHab:number;

}
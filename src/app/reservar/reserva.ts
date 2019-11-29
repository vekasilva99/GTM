import { Hotel, Hab } from '../class/hotel/hotel';

// tslint:disable-next-line: class-name
export class itinerario {
    nombre: string;
    apellido: string;
    cedula: number;
    email: string;
    telefono: number;
    direccion: string;
    estatus: string;
    reserva: string[];
    id: string;
    costoTotal: number;
}

// tslint:disable-next-line: class-name
export class reserva {
    id: string;
    hotelId: string;
    fechaLlegada: Date;
    fechaSalida: Date;
    hab: [{tipoHab: string, numHab: number}];
    costo: number;
}

// Propiedades de los Hoteles

export class Hotel {
    id: string;
    name: string;
    imagen: string;
    stars: number[];
    latitude: string;
    length: string;
    address: string;
    state: string;
    city: string;
    hotelPictures: any[];
    fullDay: boolean;
    fullDayPrice: number;
    destino: string;
    services: string[];
    tipoDestino: string;
}
export class Mes {
    disponibilidad: number[];
}
export class Hab {
    id: string;
    nombre: string;
    imagen: string;
    nightCost: number;
    tipoVista: string;
    maxPersonas: number;
    habPictures: string[];
    comodidades: string[];
    numHab: number;
    hotel: string;
    disponibilidad: string;
}
// tslint:disable-next-line: class-name
export class disp {
    id: string;
    enero: number[];
    febrero: number[];
    marzo: number[];
    abril: number[];
    mayo: number[];
    junio: number[];
    julio: number[];
    agosto: number[];
    septiembre: number[];
    octubre: number[];
    noviembre: number[];
    diciembre: number[];
}






// Propiedades de los Hoteles

export class Hotel {

    id: string;
    name: string;
    stars: number[];
    latitude: string;
    length: string;
    address: string;
    state: string;
    city: string;
    hotelPictures: string[];
    fullDay: boolean;
    fullDayPrice: number;
    services: [{servicio:string, value:boolean}, {servicio:string, value:boolean}, {servicio:string, value:boolean}, {servicio:string, value:boolean},{servicio:string, value:boolean}, {servicio:string, value:boolean}];
    hab: Hab[];
}

export class Hab {
    id:string;
    nombre: string;
    nightCost: number;
    tipoVista: string;
    maxPersonas: number;
    habPictures: string[];
    comodidades: string[];
    numHab:number;
}



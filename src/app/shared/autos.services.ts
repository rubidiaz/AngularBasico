import { Injectable } from "@angular/core";
import { Auto } from "../datos/autos"; 

@Injectable({
providedIn: "root"
})

export class AutosService{
    listaAutos: Auto [] = [];
    
    obtenListaAutos(): Auto[] {
    let listaAutos = this._determinaListaAutos();
    return listaAutos; 
}

    public obtenAuto( id: number) {
        let listaAutos = this._determinaListaAutos();
        return listaAutos.find(auto => auto.id == id);
    }

    private _determinaListaAutos(): Auto[] {
        let listaAutos = [
        {
            id: 1,
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2011,
            color: "Plateado",
            kilometros: 160000,
            precio: 2500,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/corolla2011.jpg'
        },
        {
            id: 2,
            marca: "Chevrolet",
            modelo: "Silverado",
            anio: 2023,
            color: "Azul",
            kilometros: 300000,
            precio: 18000,
            calificacion: 5,
            imagenUrl: 'assets/imagenAutos/silverado.jpg'

        },
        {
            id: 3,
            marca: "chevrolet",
            modelo: "tahoe",
            anio: 2023,
            color: "Plateado",
            kilometros: 100000,
            precio: 15000,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/tahoe20232.jpg'
        },
        {
            id: 4,
            marca: "Daihatsu",
            modelo: "Terio Bego",
            anio: 2012,
            color: "Gris",
            kilometros: 170000,
            precio: 5000,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/terioBego.jpg'
        },
        {
            id: 5,
            marca: "Toyota",
            modelo: "Yaris",
            anio: 2007,
            color: "Azul",
            kilometros: 100000,
            precio: 4500,
            calificacion: 4,
            imagenUrl: 'assets/imagenAutos/yaris.jpg'
        }
        
        
    ]

    return listaAutos;
    }

}

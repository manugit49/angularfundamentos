import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-eventos',
    templateUrl: './eventoscomponent.html',
    standalone: false
})

export class EventosComponent implements OnInit {
    //declaramos una variable para el mensaje
    mensaje: string;

    constructor() { 
        //Le damos un valor al mensaje
        this.mensaje = "Estamos jugando con eventos en Angular";
        console.log("Soy el constructor");
    }

    //Debemos crear método para cambiar el mensaje
    //al pusal un botón
    cambiarMensaje(): void {
        //Cambiamos el mensaje por otro
        this.mensaje = "y el ciclo de vida de un componente";
    }

    ngOnInit() { 
        console.log("Soy On Init");
    }

    ngDoCheck(): void { 
        console.log("Soy Do Check");
    }
}
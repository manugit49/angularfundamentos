import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-segundo',
    templateUrl: './segundocomponent.html',
    standalone: false
})

export class SegundoComponent implements OnInit {
    nombre: string;
    diasemana: string;
    numero: number;
    constructor() {
        //CON "this" accedemos a las variables
        this.nombre = "Alumno";
        this.diasemana = "Lunes";
        this.numero = 20;
     }

    ngOnInit() { }
}
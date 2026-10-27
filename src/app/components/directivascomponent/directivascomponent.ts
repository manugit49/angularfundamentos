import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directivas',
    templateUrl: './directivascomponent.html',
    standalone: false
})

export class DirectivasComponent implements OnInit {
    //Declaramos un array de deportes (string)
    deportes: any[]

    constructor() { 
        //asignamos valores a cada deporte
        this.deportes = ["Fútbol", "Baloncesto", "Cricket", "Natación", "Tiro", "Remo"]
    }

    ngOnInit() { }
}
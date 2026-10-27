import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-numerosestilos',
    standalone: false,
    templateUrl: 'numerosestiloscomponent.html',
    styleUrl: './numerosestiloscomponent.css'
})

export class NumerosEstilosComponent implements OnInit {
    numeros: number[]
    constructor() { 
        this.numeros = [1,2,3,4,5,6,7];
    }

    generarNumero(): void {
        //declaramos un numero con valor aleatorio
        let random = Math.floor(Math.random() * 100) + 1;
        this.numeros.push(random);
    }

    ngOnInit() { }
}
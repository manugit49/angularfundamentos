import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-numeros-component',
  standalone: false,
  styleUrl: './form-numeros-component.css',
  templateUrl: './form-numeros-component.html',
})
export class FormNumerosComponent {
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  numeros: number[];

  constructor(){
    this.numeros = [];
  }

  mostrarNumeros(): void {
    //Recogemos el valor de la caja de texto
    let numero = parseInt(this.cajanumero.nativeElement.value);
    //Añadimos el número introducido
    this.numeros.push(numero);
  }
}

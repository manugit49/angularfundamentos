import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-nombres-array-component',
  standalone: false,
  styleUrl: './form-nombres-array-component.css',
  templateUrl: './form-nombres-array-component.html',
})
export class FormNombresArrayComponent {
  @ViewChild('cajanombre') cajanombre!: ElementRef;
  nombres: string[];
  
  constructor() {
    this.nombres = [];
  }

insertarNombre(): void {
    //Recogemos el valor de la caja de texto
    let nombre = this.cajanombre.nativeElement.value
    //Añadimos el nombre introducido en la caja al array
    this.nombres.push(nombre);
  }
}

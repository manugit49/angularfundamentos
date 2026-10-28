import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-doble-component',
  standalone: false,
  styleUrl: './form-doble-component.css',
  templateUrl: './form-doble-component.html',
})
export class FormDobleComponent {
  //La variable viewChild que se llamará igual que el input
  @ViewChild("cajanumero") cajanumero!: ElementRef;

  mensaje: string;
  constructor() {
    this.mensaje = "";
  }

  mostrarDoble(): void {
    //En las cajas siempre vienen testos/string, con lo que necesitamos parseInt
    let numero = parseInt(this.cajanumero.nativeElement.value);
    this.mensaje = "El doble de numero es " + numero * 2;
  }
}

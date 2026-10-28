import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-saludo-component',
  standalone: false,
  styleUrl: './form-saludo-component.css',
  templateUrl: './form-saludo-component.html',
})
export class FormSaludoComponent {
  //La variable viewchild que se llamará igual que el input
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  
  mensaje: string;

  //En el constructor debemos iniciar nuestras variables
  constructor() {
    this.mensaje = "";
  }

  //Necesitamos método para cuando el usuario pulse el botón en el formulario
  mostrarSaludo(): void {
    //Recuperamos el valor de la caja
    let nombre = this.cajanombre.nativeElement.value;
    this.mensaje = "Hoy es miércoles, " + nombre;
  }
}

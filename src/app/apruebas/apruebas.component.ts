import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apruebas',
  templateUrl: './apruebas.component.html',
  styleUrls: ['./apruebas.component.css']
})
export class ApruebasComponent implements OnInit {
  //variable inicializada
  propiedades= {
    nombre: "vacio",
    apellido: "vacio",
    edad: 0
  }

  registrado=true;

  constructor() {}

  //Se ejecuta todo lo que esta dentro apenas cargue la pagina
  ngOnInit(): void {
    // Usamos "this" ya que esta fuera de ngOnInit pero dentro de la clase
    this.propiedades = {
      nombre: "Jhon",
      apellido: "Centeno",
      edad: 24
    }
  }

  //Metodo que cambia el valor de "propiedades" al ejecutarse
  cambiarPropiedades () {
    this.propiedades = {
      nombre: "Nombre nuevo",
      apellido: "Apellido nuevo",
      edad: 0
    }
  }

  //metodo que ejecuta otro metodo
  metodoIngresarEmpresa(val:string) {
    // Usamos "this" ya que esta fuera de este metodo pero dentro de la clase
    this.cambiarPropiedades()
  };

  // Si quisieramos usar algon valor o metodo de una clase (ClaseImportada) importada de otro archivo:

  // variableAqui = ClaseImportada.variablealla

  // ClaseImportada.metodoAlla()
  
}
 
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
  textoRegistrado = "Inicialmente, El usuario no esta registrado"

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
  cambiarPropiedades():void { //void indica que la funcion no retornara nada (no hay return)
    this.propiedades = {
      nombre: "Nombre nuevo",
      apellido: "Apellido nuevo",
      edad: 0
    }
  }

  //metodo para ingresar un string de un input
  //Simultaneamente sjecuta otro metodo
  metodoIngresarEmpresa(val:string):void {
    // Usamos "this" ya que esta fuera de este metodo pero dentro de la clase
    this.cambiarPropiedades()
  };

  // Si quisieramos usar algon valor o metodo de una clase (ClaseImportada) importada de otro archivo:

  // variableAqui = ClaseImportada.variablealla

  // ClaseImportada.metodoAlla()
  

  setUsuarioRegistrado(Evento:Event) {
    //event es un objeto con propiedades y metodos. La propiedad "target" nos indica el tipo del objeto
    //alert(Evento.target)
    
    // Se debe usar esta sintaxis para referencia el valor de "value"
    if ((<HTMLInputElement>Evento.target).value == "si") {
      this.textoRegistrado = "El usuario ahora esta registrado"
    } 
    else {
      this.textoRegistrado = "El usuario ahora no esta registrado"
    }
    
  }

  //Ejemplo de biding bidireccional con el valor de una variable
  cosa = "Cosa inicial"
}
 
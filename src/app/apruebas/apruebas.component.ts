import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apruebas',
  templateUrl: './apruebas.component.html',
  styleUrls: ['./apruebas.component.css']
})
export class ApruebasComponent implements OnInit {

  public propiedades= {
    nombre: "Jhon",
    apellido: "Centeno",
    edad: 24
  }

  constructor() {}

  ngOnInit(): void {
    
    /** 
    this.propiedades= {
      nombre: "Jhon",
      apellido: "Centeno",
      edad: 24
    }*/
  }

  funcionIngresarEmpresa(val:string) { };

  registrado=true;
}
 
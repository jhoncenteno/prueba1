import { EventEmitter, Injectable, Output, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//********************** SERVICIO PARA PASAR INFORMACION DEL COMPONENTEN CARD A SIDEBAR ********************/

export class ServicioDeFavoritosService {
  //Output permite la salida de datos a un componente
  //"diparadorDeFavoritos" es el nombre 
  @Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();
  
  constructor() { }
}

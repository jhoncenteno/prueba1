import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


//********************** SERVICIO TRAER INFORMACION DE UN SERVIDOR, API, ETC... ********************/
export class RestService {
  
  //Primero debemos ir a app.module.ts e importar HttpClientModule
  constructor(private http: HttpClient) { }
}

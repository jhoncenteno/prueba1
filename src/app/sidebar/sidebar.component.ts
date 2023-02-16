import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
  //Ahora podemos usar las variables, metodos, etc, publicos contenidos en el servicio, y por ende en el componente card
  constructor(private servFavoritos: ServicioDeFavoritosService) { };

  ngOnInit(): void { 
    
    this.servFavoritos.disparadorDeFavoritos.subscribe(datos =>{
      //Incluimos la card seleccionadas en una variable para plasmarlas
      this.ListaVideoFavoritos.push(datos) 
    }
    )
  }

  //Variable donde se incluira las cards seleccionadas
  public ListaVideoFavoritos: Array<any>=[];
  
}

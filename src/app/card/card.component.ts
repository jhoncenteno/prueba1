//estas importaciones se hacen automaticamente (gracias a una extension) al declarar los metodos
//Si no se importa automaticamente, colocamos el mouse encima del metodo y damos a "quick fix "
import { ServicioDeFavoritosService } from './../servicio-de-favoritos.service';
import { Component, Input, OnInit } from '@angular/core'; //Se importa el metodo OnInit


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  public image :string = ""; //Se declara una variable que contendra imagenes que variaran
  //1) Se usa "public" para la variable para que pueda ser accesible en cualquier clase
  //2) Se debe inicializar la variable. En este caso string="". Si fuese un array seria Array<any>=[]
  
  //Ahora podemos usar las variables, metodos, etc, publicos contenidos en el servicio
  constructor(private servFavoritos: ServicioDeFavoritosService) { }; //Dentro de contructor se usa "private" para las variables

  ngOnInit(): void { 
    this.image = 'https://picsum.photos/536/354'
  }; //no se esta usando actualmente

  //@Input se usa para usar el valor de una variable (del archivo .ts) de otro componente
  //Aqui se coloca el nombre que se le dio en el .html del componente que se exporta
  @Input() valorDeCards:any; //"valorDeCards" se encuentra en app.component.html

  //Se define este metodo para agregar la card seleccionada a la lista de favoritos
  agregarFavorito() {
    //console.log(this.valorDeCards);

    //Al invocar agregarFavorito(), se emite los datos dentro del () hacia el metodo "disparadorDeFavoritos" ubicado en "servFavoritos: ServicioDeFavoritosService"
    this.servFavoritos.disparadorDeFavoritos.emit({
      datos: this.valorDeCards
    });
  };
}




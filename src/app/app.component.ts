import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//A partir se crea o modifica la logica (variables, objetos, etc) a usar en el componente
export class AppComponent implements OnInit {
  title = '1eraApp';
//Cuando se define una variable se coloca:
//1) public o private
//2) nombre que queramos y :
//3) Tipo de variable (string, object, Array<string,object,any,Array>, any)
//4) = [], "", etc

  //Variable de prueba. Indicamos public para poder usarlos fuera de este archivo (en el .html por ejemplo)
  //Si usaramos private y lo referenciamo en el .html, nos daria error
  public pruebaApp:string=""

  //Variable con el contenido de las cards. 
  public cards: Array<any>=[];
  
  constructor() { 
    this.pruebaApp="Variable del comp Root hacia el comp Header" //Generalmente aqui se colocan variables privadas

  }

  //Ambas variables se pudieron haber colocado dentro de cualquier metodo (constructor o ngOnInit)

  // ngOnIniti es una funcion o metodo que se ejecuta una vez cuando el componente carga por 1era vez
  // Se puede usar para colocar un metodo que queremos que se ejecute inmediatamente al cargar la paginas
  ngOnInit(): void { 

    //la informacion de cards generalmente se trae de un servidor o API externo, implementando el httpClientModule                  
    this.cards = [
      {
        title:"titulo de video 1",
        subtitle:"subtitulo de video 1",
        img:"https://picsum.photos/536/354"
      },
      {
        title:"titulo de video 2",
        subtitle:"subtitulo de video 2",
        img:"https://i.ytimg.com/vi/AQqyGNOP_3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAupt8UiuRY3EK8eG4fBJVN21AUGQ"
      },
      {
        title:"titulo de video 3",
        subtitle:"subtitulo de video 3",
        img:"https://i.ytimg.com/vi/MDrKhxxmfbU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXd67AYSEGf2yq_S1qcNrN_Y0xHQ"
      },
      {
        title:"titulo de video 4",
        subtitle:"subtitulo de video 4",
        img:"https://i.ytimg.com/vi/AQqyGNOP_3o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAupt8UiuRY3EK8eG4fBJVN21AUGQ"
      },
      {
        title:"titulo de video 5",
        subtitle:"subtitulo de video 5",
        img:"https://i.ytimg.com/vi/OzDIcXib48o/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg2IEwocjAP&rs=AOn4CLAVAWHw1Rx60OR7gki7uYnxHOPxtQ"
      },
      {
        title:"titulo de video 6",
        subtitle:"subtitulo de video 6",
        img:"https://i.ytimg.com/vi/CLpAWGF32Ik/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCl1OsPwFUKrs99FVmU9b1w9_EL1Q"
      }
    ]
   
  }

}
 
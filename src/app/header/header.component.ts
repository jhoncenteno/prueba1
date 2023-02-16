import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',  //Para hacer referencia con <app-header>
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public pruebaHeader:string=""

  constructor() { 
    this.pruebaHeader="Variable del comp Header"
  }

  @Input() valorPrueba :any;
  
}

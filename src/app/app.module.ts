import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from  '@angular/common/http';
import { ApruebasComponent } from './apruebas/apruebas.component';
import { ZplantillaComponent } from './zplantilla/zplantilla.component'; //IMPORTAMOS HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CardComponent,
    ApruebasComponent,
    ZplantillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //IMPORTAMOS HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

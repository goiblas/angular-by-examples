import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// rutas
import { RouterModule, Routes } from '@angular/router';
import {  appRoutes } from './app.routes';

// importación de un módulo de funcionalidad
import { BoringformModule } from './boringform/boringform.module';
import { BoringformComponent } from './boringform/boringform.component';

import { IndexPageComponent } from './index-page/index-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NotfoundComponent,
    BibliotecaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BoringformModule, // importo el módulo
    RouterModule.forRoot( appRoutes) // Permite utilizar las rutas para el modulo root
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

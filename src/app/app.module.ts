import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// rutas
import { RoutesApp } from './routes/app.routes';

// importación de un módulo de funcionalidad
import { BoringformModule } from './boringform/boringform.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { HeroModule } from './animations/hero.module';

// Componenetes Extra
import { IndexPageComponent } from './index-page/index-page.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BoringformModule, // importo el módulo
    BibliotecaModule,
    HeroModule,
    RoutesApp // Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

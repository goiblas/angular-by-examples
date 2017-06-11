import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// importación de un módulo de funcionalidad
import { BoringformModule } from './boringform/boringform.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BoringformModule // importo el módulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

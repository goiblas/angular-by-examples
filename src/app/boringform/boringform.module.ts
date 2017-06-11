import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoringformComponent } from './boringform.component';
import { GenerateBoringformComponent } from './generate-boringform/generate-boringform.component';
import { VistaResultadoComponent } from './vista-resultado/vista-resultado.component';
import { DatosFormService } from './datos-form.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BoringformComponent,
    GenerateBoringformComponent,
    VistaResultadoComponent
  ],
  exports: [
    BoringformComponent
  ],
  // servicio que puedo utilizar en cualquier componente
  providers: [
    DatosFormService
  ]
})
export class BoringformModule { }

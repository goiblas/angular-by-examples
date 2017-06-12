import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaComponent } from './biblioteca.component';

import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BibliotecaComponent
  ],
  exports: [
    BibliotecaComponent
  ],
  providers: [
    ApiService
  ]
})
export class BibliotecaModule { }

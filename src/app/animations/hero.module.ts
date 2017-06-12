import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeroService } from './services/hero.service';
import { HeroComponent } from './hero.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    HeroComponent
  ],
  exports: [
    HeroComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroModule { }

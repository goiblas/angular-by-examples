import { BoringformComponent } from './../boringform/boringform.component';
import { IndexPageComponent } from './../index-page/index-page.component';
import { HeroComponent } from './../animations/hero.component';
import { BibliotecaComponent } from './../biblioteca/biblioteca.component';
import { NotfoundComponent } from './../notfound/notfound.component';

import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', component: IndexPageComponent},
    { path: 'animations', component: HeroComponent },
    { path: 'boring-form', component: BoringformComponent },

    // redirect
    { path: 'index', redirectTo: '' },

    // parametres
    { path: 'biblioteca', component: BibliotecaComponent  },
    { path: 'biblioteca/:libro', component: BibliotecaComponent },

    // not found
    { path: '**', component: NotfoundComponent, pathMatch: 'full' }
];

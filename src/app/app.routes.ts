import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoringformComponent } from './boringform/boringform.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HeroComponent } from './animations/hero.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

import { NotfoundComponent } from './notfound/notfound.component';


interface InfoModule {
    path: string;
    component: any;
    title: string;
    tags: string[];
}

@NgModule({
    imports: [RouterModule.forRoot(new ModulesInMyApp().getRoutes())],
    exports: [RouterModule]
})
export class ModulesInMyApp {

    public modules: InfoModule[] = [
        {path: '', component: IndexPageComponent, title: 'Index component', tags: ['routes']},
        {path: 'animations', component: HeroComponent, title: 'Animaciones', tags: ['animations']},
        {path: 'boring-form', component: BoringformComponent, title: 'Boring Form', tags: ['formularios', 'Observable']}
    ];

    private routesExtra: Routes = [
        // redirect
        { path: 'index', redirectTo: '' },

        // parametres
        { path: 'biblioteca', component: BibliotecaComponent  },
        { path: 'biblioteca/:libro', component: BibliotecaComponent },

        // not found
        { path: '**', component: NotfoundComponent, pathMatch: 'full' }
    ];

    constructor() { }

    getRoutes(): Routes {
        const routesStore = [];
        this.modules.forEach( function(el){
            routesStore.push({ path: el.path, component: el.component });
        });

        return routesStore.concat(this.routesExtra);
    }

}


import { Routes } from '@angular/router';

import { BoringformComponent } from './boringform/boringform.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';

import { NotfoundComponent } from './notfound/notfound.component';

interface InfoModule {
    path: string;
    component: any;
    title: string;
    tags: string[];
}

export class ModulesInMyApp {

    public modules: InfoModule[] = [
        {path: '', component: IndexPageComponent, title: 'Index component', tags: ['routes']},
        {path: 'boring-form', component: BoringformComponent, title: 'Boring Form', tags: ['formularios', 'Observable']}
    ];

    constructor() { }

    getRoutes(): Routes {
        const routesStore = [];
        this.modules.forEach( function(el){
            routesStore.push({ path: el.path, component: el.component });
        });
        // redirect
        routesStore.push({ path: 'index', redirectTo: '' });
        // con parametros
        routesStore.push({ path: 'biblioteca/:libro', component: BibliotecaComponent });
        routesStore.push({ path: 'biblioteca', component: BibliotecaComponent });

        // not found
        routesStore.push({ path: '**', component: NotfoundComponent });
        return routesStore;
    }

}

export const appRoutes: Routes = new ModulesInMyApp().getRoutes();

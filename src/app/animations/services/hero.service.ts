import { Hero } from './../hero';
import { Heroes } from './mock-heroes';
import { Injectable } from '@angular/core';


@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(Heroes);
    }

    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise<Hero>( resolve =>
        setTimeout(resolve, 2000))
        .then(() => this.getHeroes());
    }

    getHero(id: number){
        return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
    }
}


// Promises vs Observable
// Promises -> solo una vez similar a llamada ajax;
// Observable -> te suscribes a los cambios;

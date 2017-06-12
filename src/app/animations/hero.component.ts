import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [
      trigger('heroState', [
          state('inactive', style({
              backgroundColor: '#eee',
              transform: 'scale(1)'
          })),
          state('active', style({
              backgroundColor: '#cfd832',
              transform: 'scale(1.1)'
          })),
          transition('inactive => active', animate('400ms ease-in')),
          transition('active => inactive', animate('400ms ease-out'))
      ])
  ]
})
export class HeroComponent implements OnInit {

heroes: Hero[];
selectedHero: Hero;

    constructor(
        private heroService: HeroService
    ) {}

    ngOnInit() {
       this.getHeroes();
    }
    getHeroes():void{
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    updateSelected(hero: Hero):void{
        this.selectedHero = hero;
    }
    toogleState(hero: Hero){
        hero.state = (hero.state === 'active' ? 'inactive' : 'active');
        this.updateSelected(hero);
    }
}
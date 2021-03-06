import { scale, popOverState, photoState } from './shared/animations';
import { HeroesService } from './services/hero.service';
import { Hero } from './shared/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /*animations lo que recibe es un array de datos */
  animations: [scale, popOverState, photoState]
})
export class AppComponent implements OnInit {
  title = 'app';
  heroes: Hero[] = [];
  selectedHero: Hero = null;
  constructor(private heroesService: HeroesService) {}
  private show = false;
  statePhoto: string;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  updateSelectedHero(hero: Hero ): void {
    this.selectedHero = hero;
  }

  toggleState(hero: Hero) {
    hero.state = (hero.state === 'active' ? 'inactive' : 'active');
    this.updateSelectedHero(hero);
  }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggleShow() {
    this.show = !this.show;
  }

  toggleStatePhoto(statePhoto: string) {
    this.statePhoto = statePhoto;
  }

}

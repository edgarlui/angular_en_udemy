import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({

templateUrl:'./hero-page.component.html',
changeDetection:ChangeDetectionStrategy.OnPush,
imports :[UpperCasePipe]

})

export class HeroPageComponent {
name = signal('Ironman');
age=signal(45);

heroDescription = computed( () => {
  const  description = `${this.name()} - ${this.age()}`;
  return description
})

// getHeroDescription(){
//   return `${ this.name()} - ${this.age()}`;
// }

capitalizedName = computed (() => {
  const  capitalize = `${this.name().toUpperCase()}`
  return capitalize
})

changeHero(){
this.name.set('Spiderman')
this.age.set(42)

}

resetForm(){
  this.name.set('Ironman')
  this.age.set(45)
}

cambiarEdad(value:number){
  this.age.set(value)
}
}

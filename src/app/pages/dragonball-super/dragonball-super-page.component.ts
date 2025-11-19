import { Component, inject  } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballPageComponent } from '../dragonball/dragonball-page.component';
import { DragonballService } from '../../services/dragonball.service';

// interface Character {
// id: number;
// name: string;
// power:number;

// }


@Component({

  templateUrl: './dragonball-super-page.component.html',
// imports: [NgClass],
  selector:  'dragonball-super',
imports: [CharacterList, CharacterAdd]
})
export class DragonballSuperPageComponent {

// constructor(
//   public dragonballService: DragonballService
// ) {}
public dragonballService = inject(DragonballService);
  // name =signal('');
  // power =signal(0);


// resetFields() {
//   this.name.set('')
//   this.power.set(0)
// }

// powerClasses = computed(() => {
//   return {
//     'text-danger':true,

//   };
// });

}

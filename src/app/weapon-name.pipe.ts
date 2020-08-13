import { Pipe, PipeTransform } from '@angular/core';
import { Weapon } from './model/weapon';

@Pipe({
  name: 'weaponName'
})
export class WeaponNamePipe implements PipeTransform {

  transform(value: Weapon): string {
    if (value === undefined) {
      return "Nothing";
    }
    else if (value.japanese !== undefined) {
      return value.japanese;
    }
    else {
      return value.name;
    }
  }

}
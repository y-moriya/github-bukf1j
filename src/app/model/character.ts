import { Status } from './status';
import { AttackOption, MagickOption, AtkDefenseOption, MagDefenseOption } from './options';
import { WeaponType } from '../enum/weapon-type.enum';
import { Weapon } from "./weapon";

export class Character {
  name: string;
  isEnemy: boolean;
  status: Status;
  weapon: Weapon;
  attackOption: AttackOption;
  magickOption: MagickOption;
  atkDefenseOption: AtkDefenseOption;
  magDefenseOption: MagDefenseOption;
}
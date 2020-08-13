import { WeaponType } from "../enum/weapon-type.enum";
import { Formula } from "../enum/formula.enum";

export class Weapon {
  name: string;
  japanese?: string;
  original?: boolean;
  zodiac?: boolean;
  weaponType: WeaponType;
  formula: Formula;
  attack: number;
  magickPower?: number;
  vitality: number;
  speed: number;
  ct: number;
  critical: number;
  // element: Element;
}
import { Injectable } from '@angular/core';
import { Character } from './../model/character';
import { WeaponType } from './../enum/weapon-type.enum';
import { Formula } from './../enum/formula.enum';
import { IResult } from './../interface/iresult';

@Injectable()
export class CalculateService {
  public attacker: Character;
  public defender: Character;
  constructor(
    
  ) { }

  public calculate(): IResult {
    let result: IResult;
    switch (this.attacker.weapon.formula) {
      case Formula.Strength:
        result = this.calcStr();
        break;
      case Formula.MagickPower:
        result = this.calcMag();
        break;
      case Formula.Vitality:
        result = this.calcVit();
        break;
      case Formula.Speed:
        result = this.calcSpd();
        break;
      case Formula.Pierce:
        result = this.calcPierce();
        break;
      case Formula.Mace:
        result = this.calcMace();
        break;
      case Formula.Pole:
        result = this.calcPole();
        break;
      case Formula.Unarmed:
        result = this.calcUnarmed();
        break;
      default:
        break;
    }
    return result;
  }

  private calcStr(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const min = (atk - this.defender.status.defense) * (1 + this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.strength) / 256);
    const max = (atk * 1.125 - this.defender.status.defense) * (1 + this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.strength) / 256);
    return {min: min, max: max};
  }

  private calcMag(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const matk = this.attacker.status.magickPower + this.attacker.weapon.magickPower;
    const min = (atk - this.defender.status.defense) * (1 + this.attacker.status.strength * (this.attacker.status.level + matk) / 256);
    const max = (atk * 1.125 - this.defender.status.defense) * (1 + this.attacker.status.strength * (this.attacker.status.level + matk) / 256);
    return {min: min, max: max};
  }

  private calcVit(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const max = (atk * 1.111 - this.defender.status.defense) * (1 + this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.vitality) / 128);
    return {min: 0, max: max};
  }

  private calcSpd(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const min = (atk - this.defender.status.defense) * (1 + this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.speed) / 218);
    const max = (atk * 1.125 - this.defender.status.defense) * (1 + this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.speed) / 218);
    return {min: min, max: max};
  }

  private calcPierce(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const min = atk ** 2;
    const max = (atk * 1.125) ** 2;
    return {min: min, max: max};
  }

  private calcMace(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const matk = this.attacker.status.magickPower + this.attacker.weapon.magickPower;
    const min = (atk - this.defender.status.defense) * (1 + matk * (this.attacker.status.level + matk) / 256);
    const max = (atk * 1.125 - this.defender.status.defense) * (1 + matk * (this.attacker.status.level + matk) / 256);
    return {min: min, max: max};
  }

  private calcPole(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const min = (atk - this.defender.status.magickResist) * (1 + this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.strength) / 256);
    const max = (atk * 1.125 - this.defender.status.magickResist) * (1 + this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.strength) / 256);
    return {min: min, max: max};
  }

  private calcUnarmed(): IResult {
    const atk = this.attacker.status.strength + this.attacker.weapon.attack;
    const min = (atk - this.defender.status.defense) * (this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.strength) / 256);
    const max = (atk * 1.125 - this.defender.status.defense) * (this.attacker.status.strength * (this.attacker.status.level + this.attacker.status.strength) / 256);
    return {min: min, max: max};
  }
}
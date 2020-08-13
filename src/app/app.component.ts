import { Component, VERSION } from '@angular/core';
import { Character } from './model/character';
import { CharacterService } from './service/character.service';
import { CalculateService } from './service/calculate.service';
import { IResult } from './interface/iresult';
import { WeaponType } from './enum/weapon-type.enum';
import { Formula } from './enum/formula.enum';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public monsters: Character[] = [];
  public players: Character[] = [];
  public attacker: Character;
  public defender: Character;

  constructor (
    private characterService: CharacterService,
    private calculateService: CalculateService
  ) { }

  getMonsters() {
    this.characterService.getMonsters()
      .subscribe(monsters => this.monsters = monsters);
  }

  getPlayers() {
    this.characterService.getPlayers()
      .subscribe(players => this.players = players);
  }

  ngOnInit() {
    this.getPlayers();
    this.getMonsters();
    this.players[0].weapon = {
      name: "Iron Sword",
      weaponType: WeaponType.Sword,
      formula: Formula.Strength,
      attack: 14,
      magickPower: 0,
      vitality: 0,
      speed: 0,
      ct: 0,
      critical: 5
    }
    this.calculateService.attacker = this.players[0];
    this.calculateService.defender = this.monsters[0];
  }

  public calculate(attacker: Character, defender: Character): IResult {
    return this.calculateService.calculate();
  }
}

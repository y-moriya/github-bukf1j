import { Component, VERSION } from '@angular/core';
import { Character } from './model/character';
import { CharacterService } from './service/character.service';
import { CalculateService } from './service/calculate.service';
import { WeaponService } from './service/weapon.service';
import { IResult } from './interface/iresult';
import { WeaponType } from './enum/weapon-type.enum';
import { Formula } from './enum/formula.enum';
import { Weapon } from './model/weapon';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public monsters: Character[] = [];
  public players: Character[] = [];
  public weapons: Weapon[] = [];
  public attacker: Character;
  public defender: Character;
  public result: IResult;

  constructor (
    private characterService: CharacterService,
    private calculateService: CalculateService,
    private weaponService: WeaponService,
  ) { }

  getMonsters() {
    this.characterService.getMonsters()
      .subscribe(monsters => this.monsters = monsters);
  }

  getPlayers() {
    this.characterService.getPlayers()
      .subscribe(players => this.players = players);
  }

  getWeapons() {
    this.weaponService.getWeapons()
      .subscribe(weapons => this.weapons = weapons);
  }

  ngOnInit() {
    this.getPlayers();
    this.getMonsters();
    this.getWeapons();
    this.result = {min: 0, max: 0};
  }

  onClick() {
    this.players[0].weapon = this.weapons[0];
    this.attacker = this.players[0];
    this.defender = this.monsters[0];
    this.calculateService.attacker = this.players[0];
    this.calculateService.defender = this.monsters[0];
    this.calculate();
  }

  public calculate(): void {
    if (this.attacker === undefined || this.defender === undefined) {
      this.result = {min: 0, max: 0};
      return;
    }
    console.log("obj", this.attacker.weapon);
    this.result = this.calculateService.calculate();
    console.log("after calc");
  }
}

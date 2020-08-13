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
  public player: Character;
  public selectedWeapon: Weapon;
  public selectedMonster: Character;
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
      .subscribe(
        players => { this.players = players;
        this.player = this.players[0];
      });
  }

  getWeapons() {
    this.weaponService.getWeapons()
      .subscribe(weapons => this.weapons = weapons.filter((weapon) => { return weapon.zodiac }));
  }

  ngOnInit() {
    this.getPlayers();
    this.getMonsters();
    this.getWeapons();
    this.result = {min: 0, max: 0};
  }

  onClick() {
    this.player.weapon = this.selectedWeapon;
    this.calculateService.attacker = this.player;
    this.calculateService.defender = this.selectedMonster;
    this.calculate();
  }

  public calculate(): void {
    if (this.selectedWeapon === undefined || this.selectedMonster === undefined) {
      this.result = {min: 0, max: 0};
      return;
    }
    this.result = this.calculateService.calculate();
  }
}

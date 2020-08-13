import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { Character } from '../model/character';

@Injectable()
export class CharacterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMonsters(): Observable<Character[]> {
    return this.httpClient.get<any>('assets/data/monsters.json');
  }

  public getPlayers(): Observable<Character[]> {
    return this.httpClient.get<any>('assets/data/players.json');
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { Weapon } from '../model/weapon';

@Injectable()
export class WeaponService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getWeapons(): Observable<Weapon[]> {
    return this.httpClient.get<any>('assets/data/weapons.json');
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterService } from './service/character.service';
import { HttpClientModule } from '@angular/common/http';
import { CalculateService } from './service/calculate.service';
import { ResultComponent } from './result/result.component';
import { WeaponService } from './service/weapon.service';
import { WeaponNamePipe } from './weapon-name.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, ResultComponent, WeaponNamePipe ],
  bootstrap:    [ AppComponent ],
  providers: [CharacterService, CalculateService, WeaponService]
})
export class AppModule { }

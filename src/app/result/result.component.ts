import { Component, Input } from '@angular/core';
import { IResult } from '../interface/iresult'

@Component({
  selector: 'app-result',
  template: `<p>min: {{ result.min }}, max: {{ result.max }}</p>`,
})
export class ResultComponent {
  @Input() result: IResult;
}
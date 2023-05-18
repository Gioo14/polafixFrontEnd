import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() actors: string[] = [];
  @Input() creators: string[] = [];
  @Input() showDetails: boolean = false;
}

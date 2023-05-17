import { Component } from '@angular/core';
import { SerieServiceService } from 'src/app/serie-service.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent {
  constructor(private serieService: SerieServiceService) {}

  ngOnInit(): void {}
}

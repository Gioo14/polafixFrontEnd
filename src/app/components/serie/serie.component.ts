import { Component } from '@angular/core';
import { SerieServiceService } from 'src/app/serie-service.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css'],
})
export class SerieComponent {
  constructor(private serieService: SerieServiceService) {}

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  searchTerm: string = '';

  handleSearch() {
    if (this.searchTerm) {
      this.serieService.getSerieByName(this.searchTerm).subscribe(
        (series) => {
          // Gestisci la risposta della chiamata GET qui
          console.log(series);
        },
        (error) => {
          // Gestisci eventuali errori qui
          console.error(error);
        }
      );
    }
  }

  handleClick(letter: string) {
    this.serieService.getSerieByName(letter).subscribe(
      (series) => {
        // Gestisci la risposta della chiamata GET qui
        console.log(series);
      },
      (error) => {
        // Gestisci eventuali errori qui
        console.error(error);
      }
    );
  }

  ngOnInit(): void {}
}

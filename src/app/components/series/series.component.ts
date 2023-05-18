import { Component, Input } from '@angular/core';
import { SerieServiceService } from 'src/app/serie-service.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent {
  constructor(
    private serieService: SerieServiceService,
    private userService: UserService
  ) {}

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  searchTerm: string = '';

  handleSearch() {
    if (this.searchTerm) {
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

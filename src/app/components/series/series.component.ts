import { Component, Input } from '@angular/core';
import { SerieServiceService } from 'src/app/serie-service.service';
import { UserService } from 'src/app/user.service';
import { SerieComponent } from '../serie/serie.component';

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
  @Input() series: SerieComponent[] = [];

  handleSearch() {
    if (this.searchTerm) {
      this.serieService.getSerieByName(this.searchTerm).subscribe((data) => {
        this.series = data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            actors: item.actors,
            creators: item.creators,
            showDetails: false,
          };
        });
      });
    }
  }

  showDetails(serie: SerieComponent) {
    serie.showDetails = !serie.showDetails;
  }

  addSerie(serie: SerieComponent) {
    this.userService.addSerie('', serie.id);
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

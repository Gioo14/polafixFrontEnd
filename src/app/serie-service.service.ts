import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SerieComponent } from './components/serie/serie.component';

@Injectable({
  providedIn: 'root',
})
export class SerieServiceService {
  constructor(private http: HttpClient) {}

  getSerieById(id: number) {
    const url = `http://localhost:8080/series/${id}`;
    return this.http.get(url);
  }

  getSerieByName(name: string) {
    const params = { name: name };
    return this.http.get<SerieComponent[]>('http://localhost:8080/series/', {
      params: params,
    });
  }
}

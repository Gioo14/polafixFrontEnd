import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(url: string, user: {}) {
    return this.http.post(url, user);
  }

  getAllUsers() {
    const url = `http://localhost:8080/users/`;
    return this.http.get(url);
  }

  getUserById(email: string) {
    const url = `http://localhost:8080/users/${email}`;
    return this.http.get(url);
  }

  getUserStarted(email: string) {
    const url = `http://localhost:8080/users/${email}/started`;
    return this.http.get(url);
  }

  getUserInList(email: string) {
    const url = `http://localhost:8080/users/${email}/inlist`;
    return this.http.get(url);
  }

  getUserEnded(email: string) {
    const url = `http://localhost:8080/users/${email}/ended`;
    return this.http.get(url);
  }

  getSerieUserEnded(email: string, id: number, season: number) {
    const url = `http://localhost:8080/users/${email}/ended/${id}?season=${season}`;
    return this.http.get(url);
  }

  getSerieUserStarted(email: string, id: number, season: number) {
    const url = `http://localhost:8080/users/${email}/started/${id}?season=${season}`;
    return this.http.get(url);
  }

  getSerieUserInlist(email: string, id: number, season: number) {
    const url = `http://localhost:8080/users/${email}/inlist/${id}?season=${season}`;
    return this.http.get(url);
  }

  seeChapterFromInlist(
    email: string,
    id: number,
    season: number,
    chapter: number
  ) {
    const url = `http://localhost:8080/users/${email}/inlist/${id}/${season}?chapter=${chapter}`;
    return this.http.put(url, {});
  }

  seeChapterFromStarted(
    email: string,
    id: number,
    season: number,
    chapter: number
  ) {
    const url = `http://localhost:8080/users/${email}/startet/${id}/${season}?chapter=${chapter}`;
    return this.http.put(url, {});
  }

  seeChapterFromEnded(
    email: string,
    id: number,
    season: number,
    chapter: number
  ) {
    const url = `http://localhost:8080/users/${email}/ended/${id}/${season}?chapter=${chapter}`;
    return this.http.put(url, {});
  }

  addSerie(email: string, id: number) {
    const url = `http://localhost:8080/users/${email}/inlist?id=${id}`;
    return this.http.put(url, {});
  }
}

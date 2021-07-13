import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseUrl = 'http://localhost:8080/api/v1/tutorials';

  constructor(private http: HttpClient) { }

  getTutorial(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTutorial(tutorial: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, tutorial);
  }

  updateTutorial(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTutorial(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTutorialsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  findByTitle(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?title=${title}`);
  }

  findByPublished(published: boolean): Observable<any> {
    return this.http.get(`${this.baseUrl}/published?published=${published}`);
  }
}

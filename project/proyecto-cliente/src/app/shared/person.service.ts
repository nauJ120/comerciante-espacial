import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) {
  }

  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarPersonas(): Observable<Person[]> {
    return this.http.get<Person[]>(`${environment.serverUrl}/estrella/list`)
  }

  buscarPersona(id: number): Observable<Person> {
    return this.http.get<Person>(`${environment.serverUrl}/api/escoger-estrella/${id}`)
  }

  guardarPersona(person: Person): Observable<Person> {
    return this.http.put<Person>(`${environment.serverUrl}/api/escoger-estrella`, person, { headers: this.headers });
  }
}

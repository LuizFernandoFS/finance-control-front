import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  findById(id: String): Observable<Registro> {
    const url = `${this.baseUrl}/registros/${id}`;
    return this.http.get<Registro>(url);
  }

  findAll():Observable<Registro[]> {
    const url = `${this.baseUrl}/registros`;
    return this.http.get<Registro[]>(url);
  }

  create(registro: Registro): Observable<Registro> {
    const url = `${this.baseUrl}/registros`
    return this.http.post<Registro>(url, registro);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/registros/${id}`;
    return this.http.delete<void>(url);
  }

  update(registro: Registro): Observable<void> {
    const url = `${this.baseUrl}/registros/${registro.id}`;
    return this.http.put<void>(url, registro);
  }
  
}

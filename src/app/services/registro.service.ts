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

  findAll():Observable<Registro[]> {
    const url = `${this.baseUrl}/registros`;
    return this.http.get<Registro[]>(url);
  }
}

// src/app/services/docente.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private url = 'http://localhost:3000/docentes';


  constructor(private http: HttpClient) { }

  getDocentes(): Observable<any> {
    return this.http.get<any>(this.url);

  }

  getDocenteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  createDocente(docente: any): Observable<any> {
    return this.http.post<any>(this.url, docente);
  }

  updateDocente(id: number, docente: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, docente);
  }

  deleteDocente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}

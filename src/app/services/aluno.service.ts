import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiUrl = 'http://localhost:8080/alunos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/listar`);
  }

  salvar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${this.apiUrl}/salvar`, aluno);
  }

  editar(id: string, aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${this.apiUrl}/editar/${id}`, aluno);
  }

  apagar(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/apagar/${id}`, {});
  }

  buscar(nome: string): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.apiUrl}/buscar?nomeBusca=${nome}`);
  }
  buscarPorId(id: string): Observable<Aluno> {
  return this.http.get<Aluno>(`${this.apiUrl}/${id}`);
  }
}

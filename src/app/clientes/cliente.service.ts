import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url: string = 'http://localhost:8080/api/clientes';
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  //listar los clientes
  getClientes(): Observable <Cliente[]> {
    return this.http.get(this.url).pipe(
      map(resp => resp as Cliente[])
    );
  }

  //crear un nuevo cliente
  crear(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente, {headers: this.httpHeader})
  }
}

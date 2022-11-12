import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrega } from '../models/entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  entregaUrl = 'http://localhost:7000/api/entrega';

  constructor(
    private httpCliente : HttpClient
  ) { }

  public createEntrega(entrega: Entrega): Observable<any>{
    return this.httpCliente.post<any>(this.entregaUrl,entrega);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Factura} from '../models/factura';
import {Multa} from '../models/multa';
//import {URL_BACKEND} from '../../config/config';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {

private urlEndPoint: string = 'http://localhost:8080/api/facturas';

  constructor(public http: HttpClient) { }


  getFactura(id:number):Observable<Factura>{
    return this.http.get<Factura>(`${this.urlEndPoint}/${id}`);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`);
  }

  filtrarMultas(term: string):Observable<Multa[]>{
    return this.http.get<Multa[]>(`${this.urlEndPoint}/filtrar-multas/${term}`);

  }

  create(factura: Factura): Observable<Factura>{
    return this.http.post<Factura>(this.urlEndPoint, factura);
  }
}

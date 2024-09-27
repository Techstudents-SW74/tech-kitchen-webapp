import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'https://my-json-server.typicode.com/Techstudents-SW74/Kitchen-fakeAPI/sales';

  constructor(private http: HttpClient) {}

  // Obtener todas las ventas
  getSales(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener una venta específica por ID
  getSaleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CustomerAccount } from 'src/app/models/customerAccount/customerAccount.module';

@Injectable({
  providedIn: 'root'
})
export class CustomerAccountService {

  base_url = 'https://my-json-server.typicode.com/Techstudents-SW74/Kitchen-fakeAPI/customerAccount';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error ocurred ${error.status},body was: ${error.error}`);
    } else {
      console.log(`Backend returned cod ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happend with request, try again');
  }

  getCustomerAccountList():Observable<any>{
    return this.http.get(`${this.base_url}`)
    .pipe(retry(3), catchError(this.handleError));
  }

  getCustomerAccountById(id: number): Observable<any>{
    return this.http.get(`${this.base_url}/${id}`)
    .pipe(retry(3),catchError(this.handleError));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
  private _url: string = './assets/data/customers.json';

  constructor(private _http: HttpClient) {}

  getCustomersHandleError(): Observable<any> {
    return this._http.get<any>(this._url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  // Phương thức cố tình gọi sai URL để demo lỗi (theo Bài 16)
  getCustomersHandleErrorWrongUrl(): Observable<any> {
    const wrongUrl = './assets/data/customersXXX.json';
    return this._http.get<any>(wrongUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}

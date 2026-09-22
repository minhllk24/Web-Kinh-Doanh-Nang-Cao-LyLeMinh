import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttpService {
  private _url: string = './assets/data/customers.json';

  constructor(private _http: HttpClient) {}

  getCustomersHandleError(): Observable<any> {
    return this._http.get<any>(this._url).pipe(
      catchError(this.handleError)
    );
  }

  // Phương thức cố tình gọi sai URL để demo lỗi (theo Bài 16)
  getCustomersHandleErrorWrongUrl(): Observable<any> {
    const wrongUrl = './assets/data/customersXXX.json';
    return this._http.get<any>(wrongUrl).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      errorMessage = error.error.message;
    } else {
      // Server side error
      errorMessage = `Mã lỗi: ${error.status} - Lấy dữ liệu thất bại từ đường dẫn!`;
    }
    // Trả về một Error object theo đúng format bài tập yêu cầu
    return throwError(() => new Error(errorMessage));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:64619/api/';

  constructor(private http: HttpClient) { }

  getProudacts$(): Observable<any[]> {
    return this.http
      .get(`${this.baseUrl}Products`, {
        headers: new HttpHeaders().set(
          'Authorization', `Bearer ${localStorage.getItem('access_token')}`
        )
      })
      .catch(this._handleError);
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }

}

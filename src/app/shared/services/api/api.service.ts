import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  post(path: string, body): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(),
      })
      .pipe(catchError((error) => this.formatErrors(error)));
  }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any): Observable<JSON> {
    return of(error.json());
  }
}

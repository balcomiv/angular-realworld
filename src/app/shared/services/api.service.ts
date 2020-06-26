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
      .post(
        `${environment.api_url}${path}`,
        JSON.stringify(body),
        this.setHeaders()
      )
      .pipe(catchError((error) => this.formatErrors(error)));
  }

  private setHeaders(): any {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return { headers: new HttpHeaders(headersConfig) };
  }

  private formatErrors(error: any): Observable<any> {
    return of(error.json());
  }
}

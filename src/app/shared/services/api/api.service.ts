import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtService } from '../jwt/jwt.service';
import { LooseObject } from '../../interfaces/loose-object.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private jwtService: JwtService) {}

  post(path: string, body): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body), {
        headers: this.setHeaders(),
      })
      .pipe(
        catchError((resp) => {
          return throwError(resp.error);
        })
      );
  }

  get(
    path: string,
    httpParams: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, {
        headers: this.setHeaders(),
        params: httpParams,
      })
      .pipe(
        catchError((resp) => {
          return throwError(resp.error);
        })
      );
  }

  private setHeaders(): HttpHeaders {
    const headersConfig: LooseObject = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (this.jwtService.getToken()) {
      headersConfig.Authorization = `Token ${this.jwtService.getToken()}`;
    }

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(response: any) {
    if (response.error) {
      return response.error;
    }

    console.warn('No error found on response!');
  }

  // private formatErrors(error: any): Observable<JSON> {
  //   console.log('formatErrors: ', error);
  //   return of(error);
  // }
}

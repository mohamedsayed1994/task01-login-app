import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseCrudService<T> {
  uri: string;
  private _baseUri = 'http://localhost:1818/api';

  constructor(uri: string, protected _http: HttpClient) {
    this.uri = uri;
  }

  create(body: T): Observable<T> {
    return this._http.post<T>(`${this._baseUri + this.uri}`, body);
  }

  update(body: T): Observable<T> {
    return this._http.put<T>(`${this._baseUri + this.uri}`, body);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._baseUri + this.uri);
  }

  findById(id: number): Observable<T> {
    return this._http.get<T>(`${this._baseUri + this.uri}/${id}`);
  }

}

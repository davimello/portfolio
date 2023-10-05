import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataFetchService {
  constructor(private http: HttpClient) {}

  getData$(jsonData: string): Observable<any[]> {
    return this.http.get<any[]>(jsonData).pipe(take(1));
  }
}

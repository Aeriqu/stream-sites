import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditDataService {

  constructor(private http: HttpClient) { }

  creditsEn: string = './assets/data/credits.json';

  getCredits(): Observable<any> {
    return this.http.get(this.creditsEn);
  }

}

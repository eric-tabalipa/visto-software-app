import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VaccinationApiService {
  private apiUrl = 'https://imunizacao-es.saude.gov.br/_search';

  constructor(private http: HttpClient) { }

  getVaccinationData(): Observable<any> {
    const username = 'imunizacao_public';
    const password = 'qlto5t&7r_@+#Tlstig';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${username}:${password}`)}`,
    });

    return this.http.get(this.apiUrl, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VaccinationApiService {
  private apiUrl = 'https://lbkjdxopivgjrmduvnzw.supabase.co/rest/v1/vaccination?select=*';

  constructor(private http: HttpClient) { }

  getVaccinationData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxia2pkeG9waXZnanJtZHV2bnp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTM5NTc3MCwiZXhwIjoyMDEwOTcxNzcwfQ.lD91725w3ITYEgg9WDvriQkRFcT6Ieg4GcLE89RaTiQ',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxia2pkeG9waXZnanJtZHV2bnp3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTM5NTc3MCwiZXhwIjoyMDEwOTcxNzcwfQ.lD91725w3ITYEgg9WDvriQkRFcT6Ieg4GcLE89RaTiQ',
    });

    return this.http.get(this.apiUrl, { headers });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    return this.http.post(this.baseURL + '/send-email', data);
  }

}

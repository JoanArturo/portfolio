import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    return this.http.post(this.apiURL + '/send-email', data);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  sendDate(grund: any) {
    const body = JSON.stringify(grund)
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('https://filesupload-2c026.firebaseio.com/logindates.json', body, {headers: headers});
  }
}

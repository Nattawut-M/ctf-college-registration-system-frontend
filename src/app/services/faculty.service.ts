import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class FacultyService {
  private FACULTY_URL: string = environment.serverUrl + '/faculty';

  constructor(private http: HttpClient) {}

  getAllFaculty(): Observable<Response> {
    return this.http.get<Response>(this.FACULTY_URL + '/list');
  }
}

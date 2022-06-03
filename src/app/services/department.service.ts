import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private DEPARTMENT_URL: string = environment.serverUrl + '/department'

  constructor(private http: HttpClient) {}

  getAllDepartment(): Observable<Response> {
    return this.http.get<Response>(this.DEPARTMENT_URL + '/list');
  }
}

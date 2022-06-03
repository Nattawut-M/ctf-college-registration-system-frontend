import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces/student';
import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private STUDENT_URL: string = environment.serverUrl + '/student';

  constructor(private http: HttpClient) {}

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(this.STUDENT_URL + '/list');
  }

  getStudentById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.STUDENT_URL}/find/${id}`);
  }

  createStudent(student: Student): Observable<Response> {
    return this.http.post<Response>(this.STUDENT_URL + '/create', student, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  obj!: Student;
  columns!: string[];
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudent().subscribe((response: any) => {
      console.log(response);
      this.students = response.payload;
      // console.log(this.students.length);

      if (this.students.length > 1) {
        this.columns = Object.keys(this.students[0]);
      }

      // console.log(this.columns);
    });
  }

  getById(id: string) {
    this.router.navigate(['/students', id]);
    this.studentService.getStudentById(id).subscribe((response: any) => {
      console.log(response);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { StudentService } from 'src/app/services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  display: boolean = false;
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    dateOfBirth: new FormControl(null, Validators.required),
    departmentId: new FormControl({ value: '', disabled: true }, Validators.required),
    facultyId: new FormControl(null, Validators.required),
  });

  studentInputFieldList = [
    {
      id: 'firstName',
      class: 'col-6',
      label: 'ชื่อจริง (FirstName)',
      name: 'firstName',
      placeholder: 'ณัฐวุฒิ',
      helpText: 'ชื่อจริงของคุณ เช่น ณัฐวุฒิ',
      errorText: '',
    },
    {
      id: 'lastName',
      class: 'col-6',
      label: 'นามสกุล (LastName)',
      name: 'lastName',
      placeholder: 'มีสามเสน',
      helpText: 'นามสกุลของคุณ เช่น มีสามเสน',
      errorText: '',
    },
    {
      id: 'email',
      class: 'col-12',
      label: 'อีเมล (Email)',
      type: 'email',
      name: 'email',
      placeholder: 'nattawut@mail.com',
      helpText: 'อีเมลที่ใช้ในการสมัคร',
      errorText: '',
    },
    {
      id: 'dateOfBirth',
      class: 'col-12',
      label: 'วัน/เดือน/ปี เกิด (Date Of Birth)',
      type: 'date',
      name: 'dateOfBirth',
      placeholder: Date.now().toString(),
      helpText: 'วันเกิดของคุณ',
      errorText: '',
    },
  ];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.studentForm.value);
  }
}

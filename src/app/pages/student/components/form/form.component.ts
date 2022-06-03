import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Department } from 'src/app/interfaces/department';
import { Faculty } from 'src/app/interfaces/faculty';
import { Response } from 'src/app/interfaces/response';
import { DepartmentService } from 'src/app/services/department.service';
import { FacultyService } from 'src/app/services/faculty.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  display: boolean = false;
  departments: Department[] = [];
  faculties: Faculty[] = [];
  departmentFiltered: Department[] = [];
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl('demo', Validators.required),
    lastName: new FormControl('demo', Validators.required),
    email: new FormControl(`${Date.now()}@mail.com`, Validators.required),
    dateOfBirth: new FormControl(null, Validators.required),
    departmentId: new FormControl({ value: null, disabled: true }, Validators.required),
    facultyId: new FormControl(null, Validators.required),
  });

  studentInputFieldList = [
    {
      id: 'firstName',
      class: 'col-12 md:col-6 lg:col-6 my-2',
      label: 'ชื่อจริง (FirstName)',
      name: 'firstName',
      placeholder: 'ณัฐวุฒิ',
      helpText: 'ชื่อจริงของคุณ เช่น ณัฐวุฒิ',
      errorText: '',
    },
    {
      id: 'lastName',
      class: 'col-12 md:col-6 lg:col-6 my-2',
      label: 'นามสกุล (LastName)',
      name: 'lastName',
      placeholder: 'มีสามเสน',
      helpText: 'นามสกุลของคุณ เช่น มีสามเสน',
      errorText: '',
    },
    {
      id: 'email',
      class: 'col-12 md:col-8 lg:col-9 my-2',
      label: 'อีเมล (Email)',
      type: 'email',
      name: 'email',
      placeholder: 'nattawut@mail.com',
      helpText: 'อีเมลที่ใช้ในการสมัคร',
      errorText: '',
    },
    {
      id: 'dateOfBirth',
      class: 'col-12 md:col-4 lg:col-3 my-2',
      label: 'วัน/เดือน/ปี เกิด (Date Of Birth)',
      type: 'date',
      name: 'dateOfBirth',
      placeholder: '12/12/2012',
      helpText: 'วันเกิดของคุณ',
      errorText: '',
    },
  ];

  constructor(
    private studentService: StudentService,
    private facultyService: FacultyService,
    private departmentService: DepartmentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getAllFaculty();
    this.getAllDepartment();
  }

  onSubmit() {
    // console.log(this.studentForm.value);
    const { facultyId, departmentId, ...data } = this.studentForm.value;
    data.departmentId = departmentId.id;
    console.log(data);

    this.studentService.createStudent(data).subscribe((response: Response) => {
      console.log(response, response.status === 201);
      response.status === 201
        ? this.messageService.add({
            severity: 'success',
            summary: 'เพิ่มนักเรียนสำเร็จ (Add Student Successfully)',
            detail: `${new Date(response.timestamp).toLocaleDateString('en-GB')} + ${new Date(response.timestamp).toTimeString()}`,
          })
        : this.messageService.add({ severity: 'error', summary: 'เกิดข้อผิดพลาด', detail: response.payload });
      this.onReset();
    }, (error) => {
      console.log(error);
      const serverResponse: Response = error.error;
      this.messageService.add({ severity: 'error', summary: 'เกิดข้อผิดพลาด', detail: serverResponse.message?.toString() });
    })
  }

  onReset(): void {
    this.studentForm.reset();
  }

  getAllFaculty() {
    this.facultyService.getAllFaculty().subscribe((response: Response) => {
      console.log(response);
      this.faculties = response.payload;
    });
  }

  getAllDepartment() {
    this.departmentService.getAllDepartment().subscribe((response: Response) => {
      this.departments = response.payload;
      console.log(this.departments);
    });
  }

  filterDepartmentByFaculty() {
    this.studentForm.get('departmentId')?.enable();
    const facultySelected: Faculty = this.studentForm.get('facultyId')?.value;
    console.log(`you select option faculty : `, facultySelected);
    this.departmentFiltered = this.departments.filter(
      (department: Department) => department.faculty.name === facultySelected.name
    );
  }
}

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';


import { StudentService } from 'src/app/services/student.service';

import { StudentComponent } from './student.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { FacultyService } from 'src/app/services/faculty.service';
import { DepartmentService } from 'src/app/services/department.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    StudentComponent, 
    TableComponent, FormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    RippleModule,
    InputTextModule,
    DropdownModule,
    ToastModule
  ],
  providers: [
    StudentService,
    FacultyService,
    DepartmentService,
    MessageService
  ],
})
export class StudentModule {}

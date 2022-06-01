import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((module) => module.DashboardModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((module) => module.DashboardModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/student/student.module').then((module) => module.StudentModule),
  },
  {
    path: 'departments',
    loadChildren: () => import('./pages/department/department.module').then((module) => module.DepartmentModule),
  },
  {
    path: 'faculty',
    loadChildren: () => import('./pages/faculty/faculty.module').then((module) => module.FacultyModule),
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

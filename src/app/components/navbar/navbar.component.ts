import { Component, OnInit } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'ภาพรวม (Dashboard)',
      icon: 'pi pi-chart-bar',
      routerLink: ['/dashboard'],
    },
    {
      label: 'นักเรียน (Student)',
      icon: 'pi pi-user',
      routerLink: ['/students'],
    },
    {
      label: 'สาขาวิชา (Departments)',
      icon: 'pi pi-book',
      routerLink: ['/departments'],
    },
    {
      label: 'คณะวิชา (Faculty)',
      icon: 'pi pi-building',
      routerLink: ['/faculty'],
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}

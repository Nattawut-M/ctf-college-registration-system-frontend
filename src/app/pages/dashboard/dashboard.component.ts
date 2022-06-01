import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;

  constructor() {}
  
  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgb(64, 83, 255, 0.4)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgb(64, 83, 255, 1)',
          ],
          borderWidth: 1,
        },
        // {
        //   label: 'Second Dataset',
        //   data: [28, 48, 40, 19, 86, 27, 90],
        // },
      ],
    };

    this.options = {
      title: {
        display: true,
        text: 'My Title',
        fontSize: 16,
      },
      legend: {
        position: 'top',
      },
    };
  }
}

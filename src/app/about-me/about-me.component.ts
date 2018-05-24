import { Component } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent {

    public chartType = 'radar';
    public chartDatasets: Array<any> = [
        {data: [90, 75, 85, 90, 93, 10], label: 'Frontend'},
        // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Backend'}
    ];

    // tslint:disable-next-line:max-line-length
    public chartLabels: Array<any> = ['Frontend', 'Backend', 'Responsive design', 'Version Control', 'Testing'];

    public chartColors: Array<any> = [
        // {
        //     backgroundColor: 'rgba(220,220,220,0.2)',
        //     borderColor: 'rgba(220,220,220,1)',
        //     borderWidth: 2,
        //     pointBackgroundColor: 'rgba(220,220,220,1)',
        //     pointBorderColor: '#fff',
        //     pointHoverBackgroundColor: '#fff',
        //     pointHoverBorderColor: 'rgba(220,220,220,1)'
        // },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions: any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }
}


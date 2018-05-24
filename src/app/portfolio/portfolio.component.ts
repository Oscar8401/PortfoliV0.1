import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from './portfolio.model';
// decorator that specifies the angular metadata for the component
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.get()
    .subscribe(data => {
      this.portfolio = data;
    }, error => {
      console.log('Error: ', error);
    });
  }

}

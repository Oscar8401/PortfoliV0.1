import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  home: Home;
  constructor(private homeService: HomeService) { }

  ngOnInit() {

    this.homeService.get()
      .subscribe(data => {
        this.home = data;
      }, error => {
          console.log('Error: ', error);
      });
  }

}

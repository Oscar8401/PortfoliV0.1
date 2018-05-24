 import { Component, OnInit } from '@angular/core';
 import {ContactMeService} from './contact-me.service';
 import {ContactMe} from './contact-me.model';

 @Component({
   selector: 'app-contact-me',
   templateUrl: './contact-me.component.html',
   styleUrls: ['./contact-me.component.scss'],
   providers: [ContactMeService]
 })
 export class ContactMeComponent implements OnInit {
   contactme: ContactMe;

   constructor(private contactmeService: ContactMeService) { }

   ngOnInit() {

    this.contactmeService.get()
    .subscribe(data => {
      this.contactme = data;
    }, error => {
      console.log('Error: ', error);
    });
   }

}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact-me',
//   templateUrl: './contact-me.component.html',

// })

// export class ContactMeComponent {
//     public map: any = { lat: 51.678418, lng: 7.809007 };
// }


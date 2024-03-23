import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title: string = 'Databinding';

  clickMe(): void {
    alert("Me hiciste Click!");
  }

  imageUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif';

  studentName: string = '';
}

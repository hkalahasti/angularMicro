import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-mat-map',
  templateUrl: './e-mat-map.component.html',
  styleUrls: ['./e-mat-map.component.scss']
})
export class EMatMapComponent implements OnInit {
  title: string = 'My first Angular Map';
  lat: number =17.3850;
  lng: number =  78.4867;
  constructor() { }

  ngOnInit() {
  }

}

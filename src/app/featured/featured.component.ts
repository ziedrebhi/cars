import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    });
  }
}

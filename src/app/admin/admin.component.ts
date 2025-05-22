import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cars: any[] = [];
  brands: any[] = [];
  newCar: any = {};
  newBrand: any = {};

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.loadCars();
    this.loadBrands();
  }

  loadCars() {
    this.carService.getCars().subscribe(data => this.cars = data);
  }
  loadBrands() {
    this.carService.getBrands().subscribe(data => this.brands = data);
  }

  addCar() {
    this.carService.addCar(this.newCar).subscribe(() => {
      this.newCar = {};
      this.loadCars();
    });
  }
  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(() => this.loadCars());
  }

  addBrand() {
    if (!this.newBrand.name) return;
    this.carService.addBrand(this.newBrand).subscribe(() => {
      this.newBrand = {};
      this.loadBrands();
    });
  }
  deleteBrand(id: number) {
    this.carService.deleteBrand(id).subscribe(() => this.loadBrands());
  }
}

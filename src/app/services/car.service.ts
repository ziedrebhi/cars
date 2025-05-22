import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CarService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cars`);
  }
  addCar(car: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cars`, car);
  }
  deleteCar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cars/${id}`);
  }

  getBrands(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/brands`);
  }
  addBrand(brand: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/brands`, brand);
  }
  deleteBrand(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/brands/${id}`);
  }
}
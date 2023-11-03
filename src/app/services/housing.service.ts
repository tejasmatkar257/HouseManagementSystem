import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }
  
  getAllProperties() {
    return this.http.get('http://localhost:3000/properties').pipe(
      map((data: any) => {
        const propertiesArray: any[] = Object.values(data);
        return propertiesArray;
      })
    );
  }
}

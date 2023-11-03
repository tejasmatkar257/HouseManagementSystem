import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/IProperty.interface';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty>;
  constructor(private housingService:HousingService) { }
  
  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }

}

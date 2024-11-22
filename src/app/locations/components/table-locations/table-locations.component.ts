import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { ILocationSerialization } from '../../interfaces/ilocation-serialization';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-locations',
  templateUrl: './table-locations.component.html',
  styleUrl: './table-locations.component.css'
})
export class TableLocationsComponent implements OnInit {
  // Definimos el arreglo de locations
  locations: ILocationSerialization[] = [];

  constructor(private location: LocationsService, private router: Router ){  }

  redirect(): void {
    this.router.navigate(['characters'])
  }
  ngOnInit(): void {
    this.location.getAllLocations().subscribe(
      (response) => {
        
        response.results.forEach((item)=> {
          let location: ILocationSerialization = {
            name: item.name,
            type: item.type,
            dimension: item.dimension,
            residents: item.residents
          }

          this.locations.push(location);
        });

        console.log("Este es el arreglo con las locaciones " + this.locations[0].residents)

      },
      (err) => {
        console.log('Error: ' + err);
      }
    );
  }
}

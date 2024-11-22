import { Component, OnInit } from '@angular/core';
import { LocationsService } from './locations/services/locations.service';
import { ILocationSerialization } from './locations/interfaces/ilocation-serialization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private location: LocationsService) {}

  // Definimos el arreglo de locations
  locations: ILocationSerialization[] = [];

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

  // asignAttributes (response: any): void {

  //   // Iteramos sobre la response

  //   console.log(response)
  // }
}

import { Component, OnInit } from '@angular/core';
import { LocationsService } from './locations/services/locations.service';
import { ILocationSerialization } from './locations/interfaces/ilocation-serialization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private location: LocationsService) {}

}

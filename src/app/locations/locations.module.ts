import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLocationsComponent } from './components/table-locations/table-locations.component';
import { TableRowLocationComponent } from './components/table-row-location/table-row-location.component';



@NgModule({
  declarations: [
    TableLocationsComponent,
    TableRowLocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableLocationsComponent
  ]
})
export class LocationsModule { }

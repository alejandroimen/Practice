import { Component } from '@angular/core';


@Component({
  selector: 'app-table-locations',
  templateUrl: './table-locations.component.html',
  styleUrl: './table-locations.component.css'
})
export class TableLocationsComponent {
  locations: any = [
    {
      name: 'Juan',
      type: 'Callabo',
      dimension: 'Desconocida'
    }
  ]

}

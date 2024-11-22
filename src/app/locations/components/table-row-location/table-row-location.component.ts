import { Component, Input } from '@angular/core';

@Component({
  selector: 'tr.table-row-location',
  templateUrl: './table-row-location.component.html',
  styleUrl: './table-row-location.component.css'
})
export class TableRowLocationComponent {
  @Input() location: any = {
    name: 'Juan',
    type: 'Callabo',
    dimension: 'Desconocida'
  }
}

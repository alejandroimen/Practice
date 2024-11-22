import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableLocationsComponent } from './locations/components/table-locations/table-locations.component';

const routes: Routes = [
  {path: '', component: TableLocationsComponent},
  {path: 'characters', component: TableLocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { PilotsComponent } from './components/pilots/pilots.component';


const routes: Routes = [
  {path:'starships/:id', component:StarshipDetailsComponent},
  {path:'starships/:id/people/:id', component:PilotsComponent},
  {path:'', component:StarshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

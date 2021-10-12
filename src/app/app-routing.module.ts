import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './standings/standings.component';
import { ScoringComponent } from './scoring/scoring.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'standings',component:StandingsComponent},
  {path:'scoring',component:ScoringComponent},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

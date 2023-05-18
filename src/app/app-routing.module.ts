import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SeriesComponent } from './components/series/series.component';
import { SerieUserComponent } from './components/serie-user/serie-user.component';

const routes: Routes = [
  { path: 'Initio', component: UserComponent },
  { path: 'AgregarSerie', component: SeriesComponent },
  { path: 'VerCargos', component: SerieUserComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

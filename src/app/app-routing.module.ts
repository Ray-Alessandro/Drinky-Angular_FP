import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkTableComponent } from './components/drink-table/drink-table.component';

const routes: Routes = [
  { path: 'home', component : DrinkTableComponent },// Cuando la ruta es home, carga el componente DrinkTableComponent
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Cuando esta vacio el path, redirige a home
  { path: '**', redirectTo: 'home' } // Cuando no encuentra la ruta, redirige a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

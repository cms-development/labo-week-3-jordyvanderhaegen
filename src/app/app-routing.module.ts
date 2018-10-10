import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'recepten', component: RecipesComponent },
  { path: 'recept/:id', component: RecipeDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

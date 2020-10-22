import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyBindingComponent } from './edu/property-binding/property-binding.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

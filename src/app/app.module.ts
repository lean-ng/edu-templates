import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PropertyBindingComponent } from './edu/property-binding/property-binding.component';
import { InterpolationComponent } from './edu/interpolation/interpolation.component';
import { EventBindingComponent } from './edu/event-binding/event-binding.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'event-binding', component: EventBindingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

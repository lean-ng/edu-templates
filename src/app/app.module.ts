import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PropertyBindingComponent } from './edu/property-binding/property-binding.component';
import { InterpolationComponent } from './edu/interpolation/interpolation.component';
import { EventBindingComponent } from './edu/event-binding/event-binding.component';
import { TwoWayComponent } from './edu/two-way/two-way.component';
import { TemplateRefVarsComponent } from './edu/template-ref-vars/template-ref-vars.component';
import { AttributeDirectivesComponent } from './edu/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './edu/structural-directives/structural-directives.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way', component: TwoWayComponent },
  { path: 'ref-vars', component: TemplateRefVarsComponent },
  { path: 'attr-directive', component: AttributeDirectivesComponent },
  { path: 'struct-directive', component: StructuralDirectivesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayComponent,
    TemplateRefVarsComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

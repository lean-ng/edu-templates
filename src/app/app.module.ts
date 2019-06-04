import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './syntax/property-binding/property-binding.component';
import { InterpolationComponent } from './syntax/interpolation/interpolation.component';
import { EventBindingComponent } from './syntax/event-binding/event-binding.component';
import { TwowayBindingComponent } from './syntax/twoway-binding/twoway-binding.component';
import { AttrDirectiveComponent } from './syntax/attr-directive/attr-directive.component';
import { TemplateRefvarsComponent } from './syntax/template-refvars/template-refvars.component';
import { StructDirectiveComponent } from './syntax/struct-directive/struct-directive.component';
import { ClassBindingComponent } from './syntax/class-binding/class-binding.component';
import { StyleBindingComponent } from './syntax/style-binding/style-binding.component';
import { AttrBindingComponent } from './syntax/attr-binding/attr-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    AttrDirectiveComponent,
    TemplateRefvarsComponent,
    StructDirectiveComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    AttrBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

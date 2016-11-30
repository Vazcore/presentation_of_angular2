import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentsInteractionsComponent } from './components-interactions/components-interactions.component';
import { Child1Component } from './components-interactions/child1/child1.component';
import { Child2Component } from './components-interactions/child2/child2.component';
import { Child3Component } from './components-interactions/child3/child3.component';
import { Child4Component } from './components-interactions/child4/child4.component';
import { Child5Component } from './components-interactions/child5/child5.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsInteractionsComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

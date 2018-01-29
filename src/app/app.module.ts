import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Sibling1Component } from './sibling/sibling1/sibling1.component';
import { Sibling2Component } from './sibling/sibling2/sibling2.component';

import { routing } from './app.routing';

import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

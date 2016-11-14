import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgbdButtonsRadio } from './buttons-radio/buttons-radio';
import { NgbdTooltipBasic } from './tooltip/tooltip';

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule, JsonpModule,
    NgbModule.forRoot(),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NgbdButtonsRadio,
    NgbdTooltipBasic
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

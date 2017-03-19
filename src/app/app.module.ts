import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MaterialModule, MdIconModule } from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    MdIconModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

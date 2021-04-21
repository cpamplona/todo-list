import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputBtnUnitComponent } from './input-btn-unit/input-btn-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBtnUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

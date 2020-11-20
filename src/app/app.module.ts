import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SpinnerSuccessFailComponent } from './spinner-success-fail/spinner-success-fail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SpinnerSuccessFailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

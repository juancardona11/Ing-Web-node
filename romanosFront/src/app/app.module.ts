import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumerosRomanosComponent } from './components/numeros-romanos/numeros-romanos.component';

@NgModule({
  declarations: [
    AppComponent,
    NumerosRomanosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CabecalhoModule } from './components/cabecalho/cabecalho.module';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './view/body/body.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

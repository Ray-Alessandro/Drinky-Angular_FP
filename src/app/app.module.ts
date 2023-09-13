import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { DrinkTableComponent } from './components/drink-table/drink-table.component';
import { HeaderComponent } from './components/header/header.component';


import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DrinkTableComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
P: Que hace los declarations?
R: Los declarations son los componentes que se van a utilizar en el modulo que se esta creando o importando.
P: Que hace los imports?
R: Los imports son los modulos que se van a utilizar en el modulo que se esta creando o importando.
*/

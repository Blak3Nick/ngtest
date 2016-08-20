import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule }   from '@angular/router';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, RouterModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

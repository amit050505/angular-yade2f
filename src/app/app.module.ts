import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service.ts'
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpClientModule, HttpClient, HttpHandler, DataService]
})
export class AppModule { }
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomecComponent } from './homec/homec.component';
import { ActivitycComponent } from './activityc/activityc.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HomecComponent, ActivitycComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpClientModule, HttpClient]
})
export class AppModule { }
 
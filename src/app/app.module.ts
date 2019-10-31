import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomecComponent } from './homec/homec.component';
import { ActivitycComponent } from './activityc/activityc.component';
import { MatCardModule } from '@angular/material/card';
import { DataService} from './data.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MatCardModule ],
  declarations: [ AppComponent, HomecComponent, ActivitycComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpClientModule, HttpClient, HttpHandler, DataService ]
})
export class AppModule { }
 
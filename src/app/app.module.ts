import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomecComponent } from './homec/homec.component';
import { ActivitycComponent } from './activityc/activityc.component';
import { MatCardModule } from '@angular/material/card';
import { DataService} from './data.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MatCardModule, MatExpansionModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, MatTabsModule, MatSidenavModule ],
  declarations: [ AppComponent, HomecComponent, ActivitycComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpClientModule, HttpClient, HttpHandler, DataService ]
})
export class AppModule { }
 
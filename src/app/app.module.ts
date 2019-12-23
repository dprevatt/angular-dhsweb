import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadetStatsComponent } from './cadet-stats/cadet-stats.component';
import { CompanyStatsComponent } from './company-stats/company-stats.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ChartsModule ],
  declarations: [ AppComponent, HomeComponent, CadetStatsComponent, CompanyStatsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

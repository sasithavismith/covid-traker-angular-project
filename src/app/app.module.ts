import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { SetmycolorDirective } from './directives/setmycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesComponent,
    NavbarComponent,
    DashboardCardComponent,
    SetmycolorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

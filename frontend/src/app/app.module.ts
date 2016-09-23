import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'

import { HttpService } from './services/http.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { StackedBarComponent } from './components/stacked-bar/stacked-bar.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountSettingsComponent,
    AddExpenseComponent,
    StackedBarComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

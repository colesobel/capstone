import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'

import { HttpService } from './services/http.service'
import { GetDateService } from './services/get-date.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { StackedBarComponent } from './components/stacked-bar/stacked-bar.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { ExpenseCategoriesComponent } from './components/expense-categories/expense-categories.component';
import { FixedExpensesComponent } from './components/fixed-expenses/fixed-expenses.component';
import { MonthlyIncomeComponent } from './components/monthly-income/monthly-income.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { HorizontalBarComponent } from './components/horizontal-bar/horizontal-bar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountSettingsComponent,
    AddExpenseComponent,
    StackedBarComponent,
    HeatmapComponent,
    ExpenseCategoriesComponent,
    FixedExpensesComponent,
    MonthlyIncomeComponent,
    GaugeComponent,
    HorizontalBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService, GetDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { AccountSettingsComponent } from './components/account-settings/account-settings.component'
import { AddExpenseComponent } from './components/add-expense/add-expense.component'

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'settings', component: AccountSettingsComponent},
    {path: 'add-expense', component: AddExpenseComponent},
    {path: '**', component: LoginComponent}
]


export const routing = RouterModule.forRoot(APP_ROUTES)
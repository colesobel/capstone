import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { AccountSettingsComponent } from './components/account-settings/account-settings.component'

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'settings', component: AccountSettingsComponent}
]


export const routing = RouterModule.forRoot(APP_ROUTES)
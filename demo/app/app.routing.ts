import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {LoginComponent} from './login.component';

const APP_ROUTES: Routes = [
    {path: '', component: InfoComponent },
    {path: 'Login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

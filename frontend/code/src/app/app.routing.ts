import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'home', component: MainViewComponent },
    { path: 'init', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'init' }
];

export const routing = RouterModule.forRoot(appRoutes);
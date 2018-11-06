import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faUserInjured, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { UserAbmComponent } from './user-abm/user-abm.component';
import { MainViewComponent } from './main-view/main-view.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Font awesome icons
library.add(faUsers, faUserInjured, faPowerOff);

@NgModule({
  declarations: [
    AppComponent,
    UserAbmComponent,
    MainViewComponent,
    LoginModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

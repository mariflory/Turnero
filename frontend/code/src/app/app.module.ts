import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faUserInjured, faPowerOff, faEdit, faSave,
  faTrash, faTimes, faPlus, faClipboard } from '@fortawesome/free-solid-svg-icons';

import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

import {routing}        from './app.routing';
import { RegisterComponent } from './register/index';

import { AppComponent, LoginDialogComponent } from './app.component';
import { UserAbmComponent, CreateUserDialogComponent } from './user-abm/user-abm.component';
import { MainViewComponent } from './main-view/main-view.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualizadorTurnosComponent } from './visualizador-turnos/visualizador-turnos.component';

// Font awesome icons
library.add(faUsers, faUserInjured, faPowerOff, faEdit, faSave, faTrash, faTimes, faPlus, faClipboard);

@NgModule({
  declarations: [
    AppComponent,
    UserAbmComponent,
    MainViewComponent,
    LoginDialogComponent,
    HeaderComponent,
    CreateUserDialogComponent,
    VisualizadorTurnosComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    routing
  ],
  entryComponents: [
    CreateUserDialogComponent,
    LoginDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

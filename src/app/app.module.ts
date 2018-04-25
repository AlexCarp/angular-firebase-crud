import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Firebase module initialization
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './containers';
import { EmployeeComponent, EmployeesListComponent } from './components';

import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeesListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

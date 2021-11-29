import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environment';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [EmployeeService],
})
export class AppModule {}

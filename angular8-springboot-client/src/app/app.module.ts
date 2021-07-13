import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';

import { CreateTutorialComponent } from './tutorials/create-tutorial/create-tutorial.component';
import { TutorialDetailsComponent } from './tutorials/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorials/tutorial-list/tutorial-list.component';
import { UpdateTutorialComponent } from './tutorials/update-tutorial/update-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreateTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
    UpdateTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

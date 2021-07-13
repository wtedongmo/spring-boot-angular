import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employees/update-employee/update-employee.component';

import { CreateTutorialComponent } from './tutorials/create-tutorial/create-tutorial.component';
import { TutorialDetailsComponent } from './tutorials/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorials/tutorial-list/tutorial-list.component';
import { UpdateTutorialComponent } from './tutorials/update-tutorial/update-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'tutorials', component: TutorialListComponent },
  { path: 'addTutorial', component: CreateTutorialComponent },
  { path: 'updateTuto/:id', component: UpdateTutorialComponent },
  { path: 'detailsTuto/:id', component: TutorialDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

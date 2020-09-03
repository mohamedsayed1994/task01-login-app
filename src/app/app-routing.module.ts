import { EmployeesComponent } from './component/employees/employees.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { AppLoginComponent } from './component/app-login/app-login.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'appLogin', component: AppLoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'employees/{{new}}', component: EmployeeFormComponent },
  { path: 'employees/:id', component: EmployeeFormComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/appLogin', pathMatch: 'full' },
  { path: '**', redirectTo: '/appLogin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

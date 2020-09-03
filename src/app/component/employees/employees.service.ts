import { Job } from './../../model/job';
import { Department } from './../../model/department';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from '../../core/base-crud.service';
import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: String;
  phoneNumber: string;
  hireDate: Date;
  job: Job;
  salary: number;
  managerId: number;
  department: Department;
}


@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends BaseCrudService<Employee> {

  constructor(protected _http: HttpClient) {
    super('/employees', _http);
  }

}

import { HttpClient } from '@angular/common/http';
import { BaseCrudService } from './../core/base-crud.service';
import { Department } from './../model/department';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseCrudService<Department> {
  
  constructor(protected _http: HttpClient) {
    super('/departments', _http);
  }
  
}

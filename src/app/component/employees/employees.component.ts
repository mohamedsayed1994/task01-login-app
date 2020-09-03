import { Employee, EmployeesService } from './employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  loading: boolean; // user for the loader bar
  employees: Employee[] = [];  
  constructor(private _employeesrService: EmployeesService) { }

  ngOnInit(): void {
    this.loading = true;
    this._employeesrService.findAll().subscribe(data => {
      this.employees = data;
      this.loading = false;
    });    
  }

}

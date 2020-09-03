import { Job } from './../../model/job';
import { JobService } from './../../services/job.service';
import { Department } from './../../model/department';
import { DepartmentService } from './../../services/department.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees/employees.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  id: any;
  employeeFormGroup: FormGroup;
  departments: Department[] = [];
  jobs: Job[] = [];

  constructor(private _router: Router,
    private _formBuilder: FormBuilder,
    private _currentRouter: ActivatedRoute,
    private _employeeService: EmployeesService,
    private _departmentService: DepartmentService,
    private _jobService: JobService) { }

  ngOnInit(): void {
    this.createCustomerForm();
    this._currentRouter.params.subscribe(params => {
      this.id = params.id;
      if (this.id !== 'new') {
        this._employeeService.findById(this.id).subscribe(empDetails => {
          this.employeeFormGroup.patchValue(empDetails);
        });
      }
    });
    // get department for dropdown attribute
    this._departmentService.findAll().subscribe(data => {
      console.log('==> dept: ' + this.departments);
      this.departments = data;
    });

    // get jobs for dropdown attribute  
    this._jobService.findAll().subscribe(data => {
      console.log('==> jobs: ' + this.jobs);
      this.jobs = data;
    });
  }

  private createCustomerForm() {
    this.employeeFormGroup = this._formBuilder.group({
      id: [],
      firstName: [],
      lastName: [],
      email: [],
      phoneNumber: [],
      hireDate: [],
      job: [],
      salary: [],
      managerId: [],
      departmentId: []
    });
  }

  onSubmit(): void {
    console.log('=============>1- in submit: ' + this.id);
    if (this.id === 'new') {
      console.log('=============>2- in submit: ' + this.id);
      this._employeeService.create(this.employeeFormGroup.value).subscribe(created => {
        this.employeeFormGroup.patchValue(created);
        this._router.navigateByUrl('/employees');
        // this._snackBar.open('Customer Created Successfully', null, {
        //   duration: 2000,
        //   verticalPosition: 'top',
        //   horizontalPosition: 'center'
        // });
      });
    } else {
      console.log('=============>3- in submit: ' + this.id);
      this._employeeService.update(this.employeeFormGroup.value).subscribe(created => {
        this.employeeFormGroup.patchValue(created);
        this._router.navigateByUrl('/employees');
        // this._snackBar.open('Customer Updated Successfully', null, {
        //   duration: 2000,
        //   verticalPosition: 'top',
        //   horizontalPosition: 'center'
        // });
      });
    }
  }
}


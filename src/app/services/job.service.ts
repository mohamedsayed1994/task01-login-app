import { Job } from './../model/job';
import { BaseCrudService } from './../core/base-crud.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService extends BaseCrudService<Job> {

  constructor(protected _http: HttpClient) {
    super('/jobs', _http);
  }
}

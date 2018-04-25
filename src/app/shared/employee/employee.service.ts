import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from './employee.model';

const EMPLOYEES_LIST_ALIAS = 'employees';

@Injectable()
export class EmployeeService {
  public employeeList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  public getData(): AngularFireList<any> {
    this.employeeList = this.firebase.list(EMPLOYEES_LIST_ALIAS);
    return this.employeeList;
  }

  public insertEmployee(employee: Employee): void {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary,
    });
  }

  public updateEmployee(employee: Employee): void {
    this.employeeList.update(employee.$key, {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary,
    });
  }

  public deleteEmployee($key: string): void {
    this.employeeList.remove($key);
  }
}

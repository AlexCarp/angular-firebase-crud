import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


import { EmployeeService, Employee } from '../../shared';

@Component({
  selector: 'app-employees',
  template: `
  <div class="text-center">
    <h2 class="jumbotron">Employee Register</h2>
  </div>
  <div class="row">
    <div class="col-md-7">
      <app-employee
        [employee]="employee"
        (resetForm)="resetForm()"
        (submitForm)="submitForm($event)"
      ></app-employee>
    </div>
    <div class="col-md-5">
      <app-employees-list
        [employeesList]="employeesList$ | async"
        (deleteEmployee)="deleteEmployee($event)"
        (editEmployee)="editEmployee($event)"
      ></app-employees-list>
    </div>
  </div>
  `,
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employee: Employee = new Employee();
  public employeesList$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.employeesList$ = this.employeeService.getData()
      .snapshotChanges()
      .pipe(
        map(item => {
          return item.map(element => {
            return {
              ...element.payload.toJSON(),
              $key: element.key,
            } as Employee;
          });
        })
      );
  }

  public resetForm(): void {
    this.employee = new Employee();
  }

  public submitForm(employee: Employee): void {
    if (employee.$key) {
      this.employeeService.updateEmployee(employee);
    } else {
      this.employeeService.insertEmployee(employee);
    }
    this.resetForm();
    this.toastrService.success('Submitted Successfully', 'Employee Register');
  }

  public deleteEmployee(key: string): void {
    this.employeeService.deleteEmployee(key);
  }

  public editEmployee(employee: Employee): void {
    this.employee = employee;
  }
}

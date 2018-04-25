import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../../shared';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges {
  @Input() public employee: Employee;
  @Output() public submitForm = new EventEmitter<Employee>();
  @Output() public resetForm = new EventEmitter<void>();
  public employeeFG: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.employeeFG = this.createEmployeeFG();
    this.employeeFG.reset(this.employee);
  }

  public ngOnChanges() {
    if (this.employeeFG) {
      this.employeeFG.reset(this.employee);
    }
  }

  public createEmployeeFG(): FormGroup {
    return this.fb.group({
      $key: [],
      name: [null, Validators.required],
      position: [],
      office: [],
      salary: [],
    });
  }

  public resetEmployeeFG(): void {
    this.resetForm.emit();
  }

  public submitEmployeeFG(): void {
    this.submitForm.emit(this.employeeFG.value);
  }
}

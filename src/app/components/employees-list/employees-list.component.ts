import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '../../shared';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  @Input() public employeesList: Employee[];
  @Output() public editEmployee = new EventEmitter<Employee>();
  @Output() public deleteEmployee = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public onEdit(employee: Employee): void {
    this.editEmployee.emit(employee);
  }

  public onDelete(key: string): void {
    this.deleteEmployee.emit(key);
  }

}

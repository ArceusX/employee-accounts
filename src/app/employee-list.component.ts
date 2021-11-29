import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe((item) => {
      this.employeeList = [];
      item.forEach((element) => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee($key);
    }
  }
}

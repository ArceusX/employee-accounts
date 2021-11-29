import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }

  ngSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == '')
      this.employeeService.insertEmployee(employeeForm.value);
    else this.employeeService.updateEmployee(employeeForm.value);
    this.resetForm(employeeForm);
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: '',
      name: '',
      position: '',
      salary: 0,
    };
  }
}

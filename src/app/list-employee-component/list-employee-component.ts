import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-list-employee-component',
  standalone: false,
  templateUrl: './list-employee-component.html',
  styleUrl: './list-employee-component.css'
})
export class ListEmployeeComponent implements OnInit{

  employees : Employee[] = [];

  constructor(private employeeService : EmployeeService){}
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      data => {this.employees = data;});
  }
}

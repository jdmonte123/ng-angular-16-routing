import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  constructor(private router: Router){

  }

  departments = [
    {deptId: 1, deptName: 'Admin'},
    {deptId: 2, deptName: 'Sales'},
    {deptId: 3, deptName: 'HR'},
    {deptId: 4, deptName: 'IT'}
  ]

  onClickHandler(id: any){
    this.router.navigate(['department-detail', id])
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent {

  deptId: any;

  constructor(private activatedRoute: ActivatedRoute){
    this.deptId = this.activatedRoute.snapshot.paramMap.get('id')
  }


}

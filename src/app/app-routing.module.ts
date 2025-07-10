import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes} from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { DepartmentComponent } from "./department/department.component";

const routes: Routes = [
  { path : 'employee', component: EmployeeComponent},
  { path : 'department', component: DepartmentComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'department-detail/:id', component: DepartmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

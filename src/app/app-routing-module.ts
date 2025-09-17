import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee-component/list-employee-component';
import { CreateEmployeeComponent } from './create-employee-component/create-employee-component';
import { UpdateEmployeeComponent } from './update-employee-component/update-employee-component';

const routes: Routes = [
  {path:'employees',component:ListEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

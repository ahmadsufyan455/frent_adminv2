import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MotorListComponent } from './motor-list/motor-list.component';
import { MotorDetailComponent } from './motor-detail/motor-detail.component';
import { AddMotorComponent } from './add-motor/add-motor.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'motor',
        component: MotorListComponent
      },
      {
        path: 'add-motor',
        component: AddMotorComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    MotorListComponent,
    MotorDetailComponent,
    AddMotorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }

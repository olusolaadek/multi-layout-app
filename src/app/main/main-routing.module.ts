import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainComponent } from './main/main.component';
import { MonthFormComponent } from './month-form/month-form.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // This layout component will render in app's router-outlet
    children: [
      {
        path: '',
        component: MainComponent, //
      },
      {
        path: 'month',
        component: MonthFormComponent, //
      },
      {
        path: 'emp-rpt',
        component: EmployeeReportComponent, //
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

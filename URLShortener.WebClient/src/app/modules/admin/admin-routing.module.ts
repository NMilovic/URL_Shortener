import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyTopComponent } from './daily-top/daily-top.component';

const routes: Routes = [
  {
    path: '', component: DailyTopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

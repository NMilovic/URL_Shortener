import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyTopComponent } from './daily-top/daily-top.component';
import { MaterialModule } from '../../material.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    DailyTopComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

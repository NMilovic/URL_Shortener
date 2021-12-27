import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { MaterialModule } from '../../material.module';
import { ClientRoutingModule } from './client-view-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientViewModule { }

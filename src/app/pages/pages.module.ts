import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './rounting.module';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    HomeComponent,
    DetailsComponent
  ]
})
export class PagesModule { }

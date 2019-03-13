import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyReorderComponent } from './easy-reorder.component';
import { EasyReorderRoutingModule } from './easy-reorder-routing.module';

@NgModule({
  declarations: [EasyReorderComponent],
  imports: [
    CommonModule,
    EasyReorderRoutingModule
  ]
})
export class EasyReorderModule { }

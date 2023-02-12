import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuCartComponent } from './menu-cart.component';



@NgModule({
  declarations: [MenuCartComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuCartComponent]
})
export class MenuCartModule { }

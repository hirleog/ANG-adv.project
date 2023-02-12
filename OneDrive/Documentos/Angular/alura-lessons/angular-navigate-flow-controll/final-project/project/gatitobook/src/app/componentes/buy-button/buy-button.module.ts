import { BuyButtonComponent } from './buy-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BuyButtonComponent],
  imports: [
    CommonModule,
  ],
  exports: [BuyButtonComponent]
})
export class BuyButtonModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { BuyButtonModule } from './../componentes/buy-button/buy-button.module';
import { MenuCartModule } from './../componentes/menu-cart/menu-cart.module';

@NgModule({
  imports: [
    CommonModule,
    MensagemModule,
    ReactiveFormsModule,
    BuyButtonModule,
    MenuCartModule,
  ],
  exports: [
    MensagemModule,
    ReactiveFormsModule,
    BuyButtonModule,
    MenuCartModule,
  ],
})
export class SharedModule { }

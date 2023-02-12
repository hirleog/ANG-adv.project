import { MenuCartModule } from './../componentes/menu-cart/menu-cart.module';
import { BuyButtonModule } from './../componentes/buy-button/buy-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MensagemModule, ReactiveFormsModule, BuyButtonModule, MenuCartModule,],
  exports: [MensagemModule, ReactiveFormsModule, BuyButtonModule, MenuCartModule,],
})
export class SharedModule { }

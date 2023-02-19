import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { BuyButtonModule } from './../componentes/buy-button/buy-button.module';

@NgModule({
  imports: [
    CommonModule,
    MensagemModule,
    ReactiveFormsModule,
    BuyButtonModule,
  ],
  exports: [
    MensagemModule,
    ReactiveFormsModule,
    BuyButtonModule,
  ],
})
export class SharedModule { }

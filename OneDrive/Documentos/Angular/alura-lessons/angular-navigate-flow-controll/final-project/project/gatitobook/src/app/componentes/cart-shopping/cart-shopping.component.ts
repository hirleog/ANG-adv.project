import { Animais } from './../../animais/animais';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart-shopping.service';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart-shopping.component.html',
  styleUrls: ['./cart-shopping.component.css']
})
export class CartShoppingComponent implements OnInit {

  products!: Animais[]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}

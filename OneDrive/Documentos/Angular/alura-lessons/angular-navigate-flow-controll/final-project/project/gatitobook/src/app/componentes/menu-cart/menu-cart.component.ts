import { SharedService } from './../../shared/shared.service';
import { CartService } from './../cart-shopping/cart-shopping.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html',
  styleUrls: ['./menu-cart.component.css']
})
export class MenuCartComponent implements OnInit {

  mostraMenu = false;
  mostraCarrinho = false;
  items: any;
  itemsObj: any;

  constructor(
    private router: Router,
    private cartService: CartService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  abreMenu() {
    this.mostraMenu = !this.mostraMenu;
  }
  goBack() {
    this.router.navigate(['animais'])
  }

  getProducts() {
    this.items = this.sharedService.getProduct()
    console.log(typeof this.items, 'itemsObj');

  }

}

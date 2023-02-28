import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './../../shared/shared.service';
import { CartService } from './../cart-shopping/cart-shopping.service';

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

  @Output()
  courseSelected = new EventEmitter<any>();


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
    console.log(this.items, 'itemsObj');

    this.courseSelected.emit(this.items);
  }

}

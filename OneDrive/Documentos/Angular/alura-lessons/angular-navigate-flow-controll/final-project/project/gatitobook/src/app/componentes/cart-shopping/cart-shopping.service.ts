import { SharedService } from './../../shared/shared.service';
import { Injectable } from '@angular/core';
import { Animais } from './../../animais/animais';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

  constructor(
    private sharedService: SharedService
  ) { }

  items: Animais[] = []

  addItem(item: Animais) {
    this.items.push(item)
    sessionStorage.setItem("cart", JSON.stringify(this.items))

    this.sharedService.setProduct(this.items)
  }
  // getItems() {
  //   return this.items
  //     // .map((products) => products.)
  // }

  removeItem(Product: any) {
    this.items.splice(this.items.indexOf(Product), 1)
    //salva na sessão
    sessionStorage.setItem("cart", JSON.stringify(this.items))
  }

  // total(): number {
  //   return this.items
  //     .map(item => item.price.value)
  //     .reduce((prev, value) => prev + value, 0)
  // }
  // totalIns(): number {
  //   return this.items
  //     .map(item => item.price.installmentValue)
  //     .reduce((prev, value) => prev + value, 0)
  // }
  // installment(): number {
  //   return Math.max.apply(
  //     Math, this.items
  //       .map(function (prod) {
  //         return prod.price.installments;
  //       }))
  // }
}

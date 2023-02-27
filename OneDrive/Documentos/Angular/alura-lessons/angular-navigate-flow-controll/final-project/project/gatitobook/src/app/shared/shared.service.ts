import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public productShared: any

  constructor() { }

  public getProduct(): any {
    return this.productShared;
  }
  public setProduct(product: any): any {
    this.productShared = product;
  }
}

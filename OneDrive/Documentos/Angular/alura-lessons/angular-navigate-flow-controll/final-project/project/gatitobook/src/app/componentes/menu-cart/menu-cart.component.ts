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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  abreMenu() {
    this.mostraMenu = !this.mostraMenu;
  }
  goBack() {
    this.router.navigate(['animais'])
  }

}

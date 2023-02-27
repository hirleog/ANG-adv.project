import { CartService } from './../../componentes/cart-shopping/cart-shopping.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animais, Animal } from '../animais';
import { AnimaisService } from './../animais.service';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css'],
})
export class GradeFotosAnimaisComponent implements OnInit {
  @Input() animais!: Animais;
  animalId!: number;
  animal$!: Observable<Animal>;
  colorBtn: boolean = false;

  show!: boolean;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService


  ) { }

  ngOnInit(): void { }

  addCart(Product: any) {
    // NProgress.start()
    this.cartService.addItem(Product)
    // NProgress.done()
  }

  // curtir() {
  //   this.animaisService.curtir(this.animalId).subscribe((curtida) => {
  //     if (curtida) {
  //       this.animal$ = this.animaisService.buscaPorID(this.animalId);
  //     }
  //   });
  //   this.colorBtn = !this.colorBtn
  // }

  // excluir() {
  //   this.animaisService.excluiAnimal(this.animalId).subscribe(
  //     () => {
  //       this.router.navigate(['/animais/']);
  //     },
  //     (error) => console.log(error)
  //   );
  // }
}

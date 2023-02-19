import { Comentarios } from './comentarios/comentarios';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css'],
})
export class DetalheAnimalComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;
  colorBtn: boolean = false;
  show: boolean = false;

  titleCard = 'CX. SEDA LION ROLLING CIRCUS 1 1/4 BLOODY STRAWBERRY'

  mostraCartBar = false;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorID(this.animalId);
  }

  abreCart() {
    this.mostraCartBar = !this.mostraCartBar;
  }

  curtir() {
    this.animaisService.curtir(this.animalId).subscribe((curtida) => {
      if (curtida) {
        this.animal$ = this.animaisService.buscaPorID(this.animalId);
        this.colorBtn = !this.colorBtn
      }
    });
  }

  excluir() {
    this.animaisService.excluiAnimal(this.animalId).subscribe(
      () => {
        this.router.navigate(['/animais/']);
      },
      (error) => console.log(error)
    );
  }

  goToCart() {
    const id = this.animaisService.buscaPorID(this.animalId);
    this.router.navigate([`animais/${id}/carrinho/`])
  }
}

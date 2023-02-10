import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  private urlOriginal = '';

  @Input() descricao = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return 'https://popipe.com.br/media/amasty/webp/catalog/product/cache/d1f4e779449d8a8829a098d981af7bac/5/_/5_-_seda_bloody_strawberry3-min_jpg.webp'
  }
  // get url(): string {
  //   return this.urlOriginal;
  // }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.css']
})
export class LivrosdetailsComponent {
  @Input() livroEditavel: Livro = new Livro(); 

  @Output() salvarLivro = new EventEmitter<Livro>();

  constructor() {}

  salvar() {
    this.salvarLivro.emit(this.livroEditavel); 
    this.livroEditavel = new Livro();
  }

  limpar() {
    this.livroEditavel = new Livro(); 
  }
}
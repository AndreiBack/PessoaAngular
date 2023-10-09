import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.css']
})
export class PessoasdetailsComponent {

  @Input() pessoaEditavel: Pessoa = new Pessoa(); 

  @Output() salvarPessoa = new EventEmitter<Pessoa>();

  constructor() {}

  salvar() {
    this.salvarPessoa.emit(this.pessoaEditavel); 
    this.pessoaEditavel = new Pessoa();
  }

  limpar() {
    this.pessoaEditavel = new Pessoa(); 
  }
}
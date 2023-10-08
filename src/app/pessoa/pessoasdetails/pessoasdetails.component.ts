import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.css']
})
export class PessoasdetailsComponent {

  roteador = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa();

  @Output() retorno = new EventEmitter<Pessoa>();


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }


  salvar(){
    this.retorno.emit(this.pessoa);
  }

}

import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css']
})
export class PessoasListComponent {
  lista:Pessoa[] = [];
  pessoaEditavel: Pessoa = new Pessoa();

  modalService = inject(NgbModal);

  constructor(){
    let pessoa1:Pessoa= new Pessoa();
    pessoa1.nome = "KailinhaGameplays";
    pessoa1.idade = 35;

    let pessoa2:Pessoa= new Pessoa();
    pessoa2.nome = "VanderleiOBrabo";
    pessoa2.idade = 15;

    let pessoa3:Pessoa= new Pessoa();
    pessoa3.nome = "AndreizinhoGamer";
    pessoa3.idade = 18;
    
    let pessoa4:Pessoa= new Pessoa();
    pessoa4.nome = "Minha vó";
    pessoa4.idade = 80;

    let pessoa5:Pessoa= new Pessoa();
    pessoa5.nome = "Gertrudes";
    pessoa5.idade = 40;

    let pessoa6:Pessoa= new Pessoa();
    pessoa6.nome = "Mulher";
    pessoa6.idade = 40;

    let pessoa7:Pessoa= new Pessoa();
    pessoa7.nome = "Rato do esgoto";
    pessoa7.idade = 32;

    let pessoa8:Pessoa= new Pessoa();
    pessoa8.nome = "Marcelo autopeças";
    pessoa8.idade = 31;
    
    let pessoa9:Pessoa= new Pessoa();
    pessoa9.nome = "Reyna";
    pessoa9.idade = 41;
    
    let pessoa10:Pessoa= new Pessoa();
    pessoa10.nome = "Pedrinho games";
    pessoa10.idade = 14;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);
  }
  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  abrirModalEditar(editar:any, pessoa:Pessoa){
    this.pessoaEditavel = pessoa;
    this.modalService.open( editar, { size: 'lg' });
  }

  addNaLista(pessoa: Pessoa){
    this.lista.push(pessoa);
    this.modalService.dismissAll();
  }


  edit(pessoaEditada: Pessoa) {
    const index = this.lista.findIndex(p => p === this.pessoaEditavel);
    if (index !== -1) {
      this.lista[index] = pessoaEditada;
      this.pessoaEditavel = new Pessoa(); 
    }
    this.modalService.dismissAll(); 
  }

}

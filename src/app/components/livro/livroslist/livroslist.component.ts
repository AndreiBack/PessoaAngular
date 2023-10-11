import { Component, inject } from '@angular/core';
import { Livro } from '../../../model/livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.css']
})
export class LivroslistComponent {
  lista: Livro[] = [];

  LivroSelecionadoParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {

    this.listAll();


  }


  listAll() {

    this.livroService.listAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.livroService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  adicionar(modal: any) {
    this.LivroSelecionadoParaEdicao = new Livro();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, livro: Livro, indice: number) {
    this.LivroSelecionadoParaEdicao = Object.assign({}, livro); 
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarLivro(livro: Livro) {

    this.listAll();

  

    this.modalService.dismissAll();

  }
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este livro?')) {
      this.livroService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(livro => livro.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o livro. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }
  


}




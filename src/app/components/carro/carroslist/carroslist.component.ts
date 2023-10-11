import { Component, inject } from '@angular/core';
import { Carro } from '../../../model/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from 'src/app/services/carro.service';


@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.css']
})
export class CarroslistComponent {
  

  lista: Carro[] = [];

  carroSelecionadoParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  carroService = inject(CarroService);

  constructor() {

    this.listAll();

  }


  listAll() {

    this.carroService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.carroService.exemploErro().subscribe({
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
    this.carroSelecionadoParaEdicao = new Carro();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, carro: Carro, indice: number) {
    this.carroSelecionadoParaEdicao = Object.assign({}, carro); 
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarCarro(carro: Carro) {

    this.listAll();
    this.modalService.dismissAll();

  }
  excluir(id: number) {
    if (confirm('Deseja realmente excluir este carro?')) {
      this.carroService.delete(id).subscribe({
        next: () => {
          this.lista = this.lista.filter(carro => carro.id !== id);
        },
        error: erro => {
          alert('Ocorreu um erro ao excluir o carro. Confira o console para mais informações.');
          console.error(erro);
        }
      });
    }
  }
  

}
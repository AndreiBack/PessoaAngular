import { Component, inject } from '@angular/core';
import { Carro } from '../../../model/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.css']
})
export class CarroslistComponent {
  
  lista:Carro[] = [];
  carroEditavel: Carro = new Carro();
  modalService = inject(NgbModal);

  constructor(){

    let carro1:Carro = new Carro();
    carro1.nome = "CarroDoBen10";
    carro1.ano = 2010;

    let carro2:Carro = new Carro();
    carro2.nome = "Corola";
    carro2.ano = 1990;

    let carro3:Carro = new Carro();
    carro3.nome = "Impala";
    carro3.ano = 1967;

    this.lista.push(carro1);
    this.lista.push(carro2);
    this.lista.push(carro3);
  }

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(carro: Carro){
    this.lista.push(carro);
    this.modalService.dismissAll();
  }

  abrirModalEditar(editar:any, carro:Carro){
    this.carroEditavel = carro;
    this.modalService.open( editar, { size: 'lg' });
  }



  edit(carroEditado: Carro) {
    const index = this.lista.findIndex(p => p === this.carroEditavel);
    if (index !== -1) {
      this.lista[index] = carroEditado;
      this.carroEditavel = new Carro(); 
    }
    this.modalService.dismissAll(); 
  }

}


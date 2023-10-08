import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.css']
})
export class CarroslistComponent {
  lista:Carro[] = [];

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


}


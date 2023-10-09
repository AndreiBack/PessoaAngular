import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.css']
})
export class CarrosdetailsComponent {
  
  @Input() carroEditavel: Carro = new Carro(); 

  @Output() salvarCarro = new EventEmitter<Carro>();

  constructor() {}

  salvar() {
    this.salvarCarro.emit(this.carroEditavel); 
    this.carroEditavel = new Carro();
  }

  limpar() {
    this.carroEditavel = new Carro(); 
  }
}
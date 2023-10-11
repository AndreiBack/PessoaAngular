import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from '../../../model/carro';
import { ActivatedRoute } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.css']
})
export class CarrosdetailsComponent {
  
 
  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarroService);
  isEdit = false; 

  constructor() {

  }

  ngOnInit() {
    this.isEdit = this.carro.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      // Modo de edição
      this.carroService.update(this.carro).subscribe({
        next: carro => {
          this.retorno.emit(carro);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.carroService.save(this.carro).subscribe({
        next: carro => {
          this.retorno.emit(carro);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }

}

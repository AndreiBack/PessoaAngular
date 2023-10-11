import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livro } from '../../../model/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.css']
})
export class LivrosdetailsComponent {
  @Input() livro: Livro = new Livro();
  @Output() retorno = new EventEmitter<Livro>();

  livroService = inject(LivroService);
  isEdit = false; 

  constructor() {

  }

  ngOnInit() {
    this.isEdit = this.livro.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      // Modo de edição
      this.livroService.update(this.livro).subscribe({
        next: livro => {
          this.retorno.emit(livro);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.livroService.save(this.livro).subscribe({
        next: livro => {
          this.retorno.emit(livro);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }

}
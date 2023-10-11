import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';
import { PessoaService } from 'src/app/services/pessoa-service.service.spec';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.css']
})
export class PessoasdetailsComponent {

  @Input() pessoa: Pessoa = new Pessoa();
  @Output() retorno = new EventEmitter<Pessoa>();

  pessoaService = inject(PessoaService);
  isEdit = false; 

  constructor() {

  }

  ngOnInit() {
    this.isEdit = this.pessoa.id > 0; 
  }

  salvar() {
    if (this.isEdit) {
      // Modo de edição
      this.pessoaService.update(this.pessoa).subscribe({
        next: pessoa => {
          this.retorno.emit(pessoa);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.pessoaService.save(this.pessoa).subscribe({
        next: pessoa => {
          this.retorno.emit(pessoa);
        },
        error: erro => {
          alert('Deu erro! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }

}

import { Component } from '@angular/core';
import { Pessoa } from './pessoa';
@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  lista:Pessoa[] = [];

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

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
  }
}

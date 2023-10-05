import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.css']
})
export class LivroslistComponent {
  lista:Livro[] = [];

  constructor(){

    let livro1:Livro= new Livro();
    livro1.titulo = "Dracula";
    livro1.autor = "Bram Stoker";

    let livro2:Livro= new Livro();
    livro2.titulo = "Carmilla";
    livro2.autor = "Sheridan Le Fanu";

    let livro3:Livro= new Livro();
    livro3.titulo = "O Vampiro";
    livro3.autor = "John William Polidori";

    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
  }

}

import { Component, inject } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  roteador = inject(Router);

  usuario: Usuario = new Usuario();

  logar() {
    if (this.usuario.email == "admin@gmail.com" && this.usuario.senha == "admin") {
      this.roteador.navigate(['/admin/pessoas']);
    }
    else
      alert('Usuário ou senha incorretos');
  }

}
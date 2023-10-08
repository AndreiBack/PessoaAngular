import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { MenusuperiorComponent } from './layout/menusuperior/menusuperior.component';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoasListComponent } from './pessoa/pessoas-list/pessoas-list.component';
import { PessoasdetailsComponent } from './pessoa/pessoasdetails/pessoasdetails.component';
import { CarroComponent } from './carro/carro.component';
import { CarroslistComponent } from './carro/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './carro/carrosdetails/carrosdetails.component';
import { LivroComponent } from './livro/livro.component';
import { LivroslistComponent } from './livro/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './livro/livrosdetails/livrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    MenusuperiorComponent,
    IndexComponent,
    LoginComponent,
    FooterComponent,
    PessoasListComponent,
    PessoasdetailsComponent,
    CarroComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivroComponent,
    LivroslistComponent,
    LivrosdetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

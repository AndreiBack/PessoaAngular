import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenusuperiorComponent } from './components/layout/menusuperior/menusuperior.component';
import { IndexComponent } from './components/layout/index/index.component';
import { LoginComponent } from './components/sistema/login/login.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PessoaslistComponent } from './components/pessoa/pessoaslist/pessoas-list.component';
import { PessoasdetailsComponent } from './components/pessoa/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './components/carro/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './components/carro/carrosdetails/carrosdetails.component';
import { LivroslistComponent } from './components/livro/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './components/livro/livrosdetails/livrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenusuperiorComponent,
    IndexComponent,
    LoginComponent,
    FooterComponent,
    PessoaslistComponent,
    PessoasdetailsComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivroslistComponent,
    LivrosdetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    MenusuperiorComponent,
    IndexComponent,
    LoginComponent,
    FooterComponent,
    PessoasListComponent,
    PessoasdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

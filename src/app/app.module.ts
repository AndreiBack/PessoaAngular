import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './layout/pessoa/pessoa.component';
import { MenusuperiorComponent } from './layout/menusuperior/menusuperior.component';
import { IndexComponent } from './layout/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    MenusuperiorComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoasListComponent } from './pessoa/pessoas-list/pessoas-list.component';
import { PessoasdetailsComponent } from './pessoa/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './carro/carroslist/carroslist.component';
import { LivroslistComponent } from './livro/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './livro/livrosdetails/livrosdetails.component';
import { CarrosdetailsComponent } from './carro/carrosdetails/carrosdetails.component';

const routes: Routes = [
  {path:"", component:IndexComponent},
  {path:"login", component:LoginComponent},
  {path:"admin", component: IndexComponent, children: [
    {path:"pessoas", component: PessoasListComponent},
    { path: "pessoas/novo", component: PessoasdetailsComponent},
    { path: "pessoas/editar/:id", component: PessoasdetailsComponent},

    { path: "carros", component: CarroslistComponent},
    { path: "carros/novo", component: CarrosdetailsComponent},
    { path: "carros/editar/:id", component: CarrosdetailsComponent },
    
    { path: "livros", component: LivroslistComponent},
    { path: "livros/novo", component: LivrosdetailsComponent},
    { path: "livros/editar/:id", component: LivrosdetailsComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

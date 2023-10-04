import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoasListComponent } from './pessoa/pessoas-list/pessoas-list.component';

const routes: Routes = [
  {path:"", component:IndexComponent},
  {path:"login", component:LoginComponent},
  {path:"admin", component: IndexComponent, children: [
    {path:"pessoas", component: PessoasListComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

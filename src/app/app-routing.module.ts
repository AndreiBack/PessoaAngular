import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './layout/pessoa/pessoa.component';
import { IndexComponent } from './layout/index/index.component';

const routes: Routes = [
  {path:"", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPessoaComponent } from './componentes/listar-pessoa/listar-pessoa.component';


const routes: Routes = [
  {
    path: 'listar',
    component: ListarPessoaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }

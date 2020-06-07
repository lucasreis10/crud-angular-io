import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pessoa', // Carrega as rotas das funcionalidades dinamicamente
        loadChildren: () => import('./funcionalidades/pessoa/pessoa.module').then(m => m.PessoaModule)
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

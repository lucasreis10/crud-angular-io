import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { ListarPessoaComponent } from './componentes/listar-pessoa/listar-pessoa.component';
import { PessoaService } from './servicos/pessoa.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [ListarPessoaComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    NgxDatatableModule
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }

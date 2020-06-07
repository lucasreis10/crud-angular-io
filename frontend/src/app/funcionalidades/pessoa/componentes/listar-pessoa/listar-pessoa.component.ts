import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../servicos/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.scss']
})
export class ListarPessoaComponent implements OnInit {

  constructor(public service: PessoaService) { }

  rows = [];

  ngOnInit() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    this.service.getAll().then(rows => {
      this.rows = rows
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  getAll() {
    return Promise.resolve([{
      id: 1,
      nome: 'Isadora',
      sobrenome: 'Martins',
      idade: 24
    }]);
  }
}

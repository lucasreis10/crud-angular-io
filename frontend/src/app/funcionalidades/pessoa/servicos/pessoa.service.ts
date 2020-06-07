import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../modelo/pessoa';
import { Service } from 'src/app/core/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends Service{
  prefix = 'pessoas';
  constructor(private http: HttpClient) {
    super();
  }

  getAll():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(`${this.apiUrl}/${this.prefix}/`);
  }
}

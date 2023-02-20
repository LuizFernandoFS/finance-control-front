import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/services/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-create-receita',
  templateUrl: './create-receita.component.html',
  styleUrls: ['./create-receita.component.css']
})
export class CreateReceitaComponent implements OnInit {

  receita: Registro = {
    descricao: '',
    valor: 0,
    tipoRegistro: 'RECEITA'
  }

  constructor(private service: RegistroService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.receita).subscribe((resposta) => {
      this.router.navigate(['registros']);
      console.log('Receita salva com sucesso!');
    }, err => { console.log(err); });
  }

  cancel(): void {
    this.router.navigate(['registros']);
  }
}

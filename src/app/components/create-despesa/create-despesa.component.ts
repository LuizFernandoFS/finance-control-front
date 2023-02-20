import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/services/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-create-despesa',
  templateUrl: './create-despesa.component.html',
  styleUrls: ['./create-despesa.component.css']
})
export class CreateDespesaComponent implements OnInit {

  despesa: Registro = {
    descricao: '',
    valor: 0,
    tipoRegistro: 'DESPESA'
  }

  constructor(private service: RegistroService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.despesa).subscribe((resposta) => {
      this.router.navigate(['registros']);
      console.log('Despesa salva com sucesso!');
    }, err => { console.log(err); });
  }

  cancel(): void {
    this.router.navigate(['registros']);
  }
}
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/services/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  registros: Registro[] = [];
  displayedColumns: string[] = ['descricao', 'valor', 'dataRegistro']
  saldo: number = 0;

  constructor(private service: RegistroService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.registros = resposta;
      this.calculaSaldo();
    });
  }

  calculaSaldo() {
    let receita: number = 0;
    let despesa: number = 0;
    for (let i = 0; i < this.registros.length; i++) {
      if (this.registros[i].tipoRegistro === 'RECEITA') {
        receita += this.registros[i].valor;
      } else {
        despesa += this.registros[i].valor;
      }
    }
    this.saldo = receita - despesa;
  }

  formatarData(data: string): string{
    const partes = data.split('-');
    const dataInvertida = partes.reverse().join('/');
    console.log(dataInvertida);
    return dataInvertida;
  }
}

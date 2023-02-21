import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from 'src/app/services/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  registros: Registro[] = [];
  displayedColumns: string[] = ['id', 'descricao', 'valor', 'dataRegistro', 'acoes']
  saldo: number = 0;

  constructor(private service: RegistroService, private router: Router) { }

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

  formatarData(data: string): string {
    const partes = data.split('-');
    const dataInvertida = partes.reverse().join('/');
    return dataInvertida;
  }

  addReceita(): void {
    this.router.navigate(['registros/create/receita']);
  }

  addDespesa(): void {
    this.router.navigate(['registros/create/despesa']);
  }

  delete(id: string): void {
    this.router.navigate([`registros/delete/${id}`]);
  }

  update(id: string): void {
    this.router.navigate([`registros/update/${id}`]);
  }
}

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
  displayedColumns: string[] = ['id', 'descricao', 'valor', 'tipoRegistro']

  constructor(private service: RegistroService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.registros = resposta;
    });
  }

}

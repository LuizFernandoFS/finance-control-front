import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from 'src/app/services/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  constructor(private service: RegistroService, private route: ActivatedRoute, private router: Router) { }

  registro: Registro = {
    id: '',
    descricao: '',
    valor: 0,
    tipoRegistro: ''
  }

  ngOnInit(): void {
    this.registro.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.registro.id!).subscribe((resposta) => {
      this.registro.descricao = resposta.descricao;
      this.registro.valor = resposta.valor;
      this.registro.tipoRegistro = resposta.tipoRegistro;
    });
  }

  update(): void {
    this.service.update(this.registro).subscribe((resposta) => {
      this.router.navigate(['registros']);
    })
  }

  cancel(): void {
    this.router.navigate(['registros']);
  }
}

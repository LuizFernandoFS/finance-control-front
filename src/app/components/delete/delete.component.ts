import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from 'src/app/services/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  registro: Registro = {
    id: '',
    descricao: '',
    valor: 0
  }

  constructor(private service: RegistroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registro.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.
    findById(this.registro.id!).
    subscribe((resposta => {
        this.registro.descricao = resposta.descricao;
        this.registro.valor = resposta.valor;
      }));
    }

  delete(): void {
    this.service.delete(this.registro.id!).subscribe((resposta) => {
      this.router.navigate(['registros']);
      console.log("Registro excluído com sucesso!");
    });
  }

  cancel(): void {
    this.router.navigate(['registros']);
  }

}

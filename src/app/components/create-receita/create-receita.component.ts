import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registro } from 'src/app/services/registro';
import { RegistroService } from 'src/app/services/registro.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  public fGroup!: FormGroup;

  constructor(private snackBar: MatSnackBar, private fBuilder: FormBuilder, private service: RegistroService, private router: Router) {
    this.fGroup = this.fBuilder.group({
      'descricao': [this.receita.descricao, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200)
      ])],
      'valor': [this.receita.valor, Validators.compose([
        Validators.required
      ])],
      'tipoRegistro': [this.receita.tipoRegistro]
    });
  }

  ngOnInit(): void { }

  create(): void {
    this.service.create(this.fGroup.value).subscribe((resposta) => {
      this.router.navigate(['registros']);
      this.snackBar.open('Receita Salva Com Sucesso!', 'OK', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    }, err => { console.log(err); });
  }

  cancel(): void {
    this.router.navigate(['registros']);
  }
}

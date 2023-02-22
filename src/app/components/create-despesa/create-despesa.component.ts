import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  public fGroup!: FormGroup;

  constructor(private snackBar: MatSnackBar,private fBuilder: FormBuilder, private service: RegistroService, private router: Router) {
    this.fGroup = this.fBuilder.group({
      'descricao': [this.despesa.descricao, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200)
      ])],
      'valor': [this.despesa.valor, Validators.compose([
        Validators.required
      ])],
      'tipoRegistro': [this.despesa.tipoRegistro]
    });
  }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.fGroup.value).subscribe((resposta) => {
      this.router.navigate(['registros']);
      this.snackBar.open('Despesa Salva Com Sucesso!', 'OK', {
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
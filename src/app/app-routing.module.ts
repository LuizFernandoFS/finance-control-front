import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDespesaComponent } from './components/create-despesa/create-despesa.component';
import { CreateReceitaComponent } from './components/create-receita/create-receita.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'registros',
    component: MainComponent
  },
  {
    path: 'registros/create/receita',
    component: CreateReceitaComponent
  },
  {
    path: 'registros/create/despesa',
    component: CreateDespesaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDespesaComponent } from './components/create-despesa/create-despesa.component';
import { CreateReceitaComponent } from './components/create-receita/create-receita.component';
import { DeleteComponent } from './components/delete/delete.component';
import { MainComponent } from './components/main/main.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent
  },
  {
    path:'registros',
    component: MainComponent
  },
  {
    path: 'registros/create/receita',
    component: CreateReceitaComponent
  },
  {
    path: 'registros/create/despesa',
    component: CreateDespesaComponent
  },
  {
    path: `registros/delete/:id`,
    component: DeleteComponent
  },
  {
    path: `registros/update/:id`,
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

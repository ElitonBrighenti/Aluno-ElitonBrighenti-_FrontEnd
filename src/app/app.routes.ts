import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AlunoListComponent } from './components/aluno-list/aluno-list';
import { AlunoFormComponent } from './components/aluno-form/aluno-form';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alunos', component: AlunoListComponent },
  { path: 'alunos/novo', component: AlunoFormComponent },
  { path: 'alunos/editar/:id', component: AlunoFormComponent }
];

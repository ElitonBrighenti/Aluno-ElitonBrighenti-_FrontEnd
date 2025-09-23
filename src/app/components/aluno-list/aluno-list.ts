import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './aluno-list.html',
  styleUrls: ['./aluno-list.css'],
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];
  nomeBusca = '';

  constructor(private alunoService: AlunoService, public router: Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.alunoService.listar().subscribe(dados => (this.alunos = dados));
  }

  buscar(): void {
    this.alunoService.buscar(this.nomeBusca).subscribe(dados => (this.alunos = dados));
  }

  editar(aluno: Aluno): void {
    this.router.navigate(['/alunos/editar', aluno.id]);
  }

  apagar(id?: string): void {
    if (!id) return;
    if (confirm('Deseja realmente apagar este aluno?')) {

      this.alunos = this.alunos.filter(aluno => aluno.id !== id);

      this.alunoService.apagar(id).subscribe({
        next: () => console.log("Aluno removido com sucesso!"),
        error: () => this.listar() 
      });
    }
  }
}

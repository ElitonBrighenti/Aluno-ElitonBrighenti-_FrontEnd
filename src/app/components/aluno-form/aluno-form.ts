import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './aluno-form.html',
  styleUrls: ['./aluno-form.css'],
})
export class AlunoFormComponent implements OnInit {
  form!: FormGroup;
  id?: string;

  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      curso: ['', [Validators.required, Validators.minLength(3)]],
      telefone: [''],
    });

    this.id = this.route.snapshot.paramMap.get('id') ?? undefined;
    if (this.id) {
      this.alunoService.buscarPorId(this.id).subscribe(aluno => {
        this.form.patchValue(aluno);
      });
    }
  }

  salvar(): void {
    const aluno: Aluno = this.form.value;
    if (this.id) {
      this.alunoService.editar(this.id, aluno).subscribe(() => this.router.navigate(['/alunos']));
    } else {
      this.alunoService.salvar(aluno).subscribe(() => this.router.navigate(['/alunos']));
    }
  }
}

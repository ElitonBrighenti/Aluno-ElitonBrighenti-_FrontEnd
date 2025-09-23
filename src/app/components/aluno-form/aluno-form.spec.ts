import { TestBed } from '@angular/core/testing';
import { AlunoFormComponent } from './aluno-form';

describe('AlunoFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoFormComponent]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AlunoFormComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

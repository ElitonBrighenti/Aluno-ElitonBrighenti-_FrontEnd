import { TestBed } from '@angular/core/testing';
import { AlunoListComponent } from './aluno-list';

describe('AlunoListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunoListComponent] // como é standalone
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AlunoListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

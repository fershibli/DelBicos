import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiroAvaliacoesComponent } from './parceiro-avaliacoes.component';

describe('ParceiroAvaliacoesComponent', () => {
  let component: ParceiroAvaliacoesComponent;
  let fixture: ComponentFixture<ParceiroAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceiroAvaliacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceiroAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

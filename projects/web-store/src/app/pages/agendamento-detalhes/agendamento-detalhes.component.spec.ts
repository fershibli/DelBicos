import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoDetalhesComponent } from './agendamento-detalhes.component';

describe('AgendamentoDetalhesComponent', () => {
  let component: AgendamentoDetalhesComponent;
  let fixture: ComponentFixture<AgendamentoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

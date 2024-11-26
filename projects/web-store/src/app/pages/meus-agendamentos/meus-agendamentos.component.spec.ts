import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAgendamentosComponent } from './meus-agendamentos.component';

describe('MeusAgendamentosComponent', () => {
  let component: MeusAgendamentosComponent;
  let fixture: ComponentFixture<MeusAgendamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeusAgendamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

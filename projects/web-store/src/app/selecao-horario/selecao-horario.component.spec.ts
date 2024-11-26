import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoHorarioComponent } from './selecao-horario.component';

describe('SelecaoHorarioComponent', () => {
  let component: SelecaoHorarioComponent;
  let fixture: ComponentFixture<SelecaoHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoHorarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

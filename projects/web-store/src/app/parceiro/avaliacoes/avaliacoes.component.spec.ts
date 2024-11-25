import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesComponent } from './avaliacoes.component';

describe('AvaliacoesComponent', () => {
  let component: AvaliacoesComponent;
  let fixture: ComponentFixture<AvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

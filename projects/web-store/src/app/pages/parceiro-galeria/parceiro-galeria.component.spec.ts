import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiroGaleriaComponent } from './parceiro-galeria.component';

describe('ParceiroGaleriaComponent', () => {
  let component: ParceiroGaleriaComponent;
  let fixture: ComponentFixture<ParceiroGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceiroGaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceiroGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

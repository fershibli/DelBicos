import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHorariosDisponiveisComponent } from './box-horarios-disponiveis.component';

describe('BoxHorariosDisponiveisComponent', () => {
  let component: BoxHorariosDisponiveisComponent;
  let fixture: ComponentFixture<BoxHorariosDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxHorariosDisponiveisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxHorariosDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

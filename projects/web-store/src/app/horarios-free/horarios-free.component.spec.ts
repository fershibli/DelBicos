import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosFreeComponent } from './horarios-free.component';

describe('HorariosFreeComponent', () => {
  let component: HorariosFreeComponent;
  let fixture: ComponentFixture<HorariosFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorariosFreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadoFormComponent } from './chamado-form.component';

describe('ChamadoFormComponent', () => {
  let component: ChamadoFormComponent;
  let fixture: ComponentFixture<ChamadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

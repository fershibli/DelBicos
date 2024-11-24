import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProfissionaisComponent } from './box-profissionais.component';

describe('BoxProfissionaisComponent', () => {
  let component: BoxProfissionaisComponent;
  let fixture: ComponentFixture<BoxProfissionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxProfissionaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiroComponent } from './parceiro.component';

describe('ParceiroComponent', () => {
  let component: ParceiroComponent;
  let fixture: ComponentFixture<ParceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

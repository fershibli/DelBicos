import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBarComponent } from './blue-bar.component';

describe('BlueBarComponent', () => {
  let component: BlueBarComponent;
  let fixture: ComponentFixture<BlueBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaDataComponent } from './confirma-data.component';

describe('ConfirmaDataComponent', () => {
  let component: ConfirmaDataComponent;
  let fixture: ComponentFixture<ConfirmaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmaDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

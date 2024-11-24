import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesgridComponent } from './servicesgrid.component';

describe('ServicesgridComponent', () => {
  let component: ServicesgridComponent;
  let fixture: ComponentFixture<ServicesgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesgridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnloginComponent } from './onlogin.component';

describe('OnloginComponent', () => {
  let component: OnloginComponent;
  let fixture: ComponentFixture<OnloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

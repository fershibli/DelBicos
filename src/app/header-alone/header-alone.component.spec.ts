import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAloneComponent } from './header-alone.component';

describe('HeaderAloneComponent', () => {
  let component: HeaderAloneComponent;
  let fixture: ComponentFixture<HeaderAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

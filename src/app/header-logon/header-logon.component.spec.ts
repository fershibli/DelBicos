import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogonComponent } from './header-logon.component';

describe('HeaderLogonComponent', () => {
  let component: HeaderLogonComponent;
  let fixture: ComponentFixture<HeaderLogonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLogonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

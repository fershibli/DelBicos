import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoutComponent } from './header-logout.component';

describe('HeaderLogoutComponent', () => {
  let component: HeaderLogoutComponent;
  let fixture: ComponentFixture<HeaderLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLogoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

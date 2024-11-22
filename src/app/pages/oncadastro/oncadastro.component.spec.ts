import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OncadastroComponent } from './oncadastro.component';

describe('OncadastroComponent', () => {
  let component: OncadastroComponent;
  let fixture: ComponentFixture<OncadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OncadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OncadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

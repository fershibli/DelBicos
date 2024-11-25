import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiroSobreComponent } from './parceiro-sobre.component';

describe('ParceiroSobreComponent', () => {
  let component: ParceiroSobreComponent;
  let fixture: ComponentFixture<ParceiroSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceiroSobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceiroSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

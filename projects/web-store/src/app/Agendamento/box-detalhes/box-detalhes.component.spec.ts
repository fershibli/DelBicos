import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetalhesComponent } from './box-detalhes.component';

describe('BoxDetalhesComponent', () => {
  let component: BoxDetalhesComponent;
  let fixture: ComponentFixture<BoxDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxDetalhesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

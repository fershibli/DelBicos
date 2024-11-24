import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pesquisa1Component } from './pesquisa-1.component';

describe('Pesquisa1Component', () => {
  let component: Pesquisa1Component;
  let fixture: ComponentFixture<Pesquisa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pesquisa1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pesquisa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

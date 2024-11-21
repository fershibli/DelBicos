import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFiltrosComponent } from './box-filtros.component';

describe('BoxFiltrosComponent', () => {
  let component: BoxFiltrosComponent;
  let fixture: ComponentFixture<BoxFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxFiltrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

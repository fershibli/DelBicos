import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPesquisaComponent } from './box-pesquisa.component';

describe('BoxPesquisaComponent', () => {
  let component: BoxPesquisaComponent;
  let fixture: ComponentFixture<BoxPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxPesquisaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

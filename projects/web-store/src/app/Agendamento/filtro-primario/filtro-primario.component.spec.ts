import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPrimarioComponent } from './filtro-primario.component';

describe('FiltroPrimarioComponent', () => {
  let component: FiltroPrimarioComponent;
  let fixture: ComponentFixture<FiltroPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltroPrimarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

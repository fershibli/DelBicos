import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceiroServicosComponent } from './parceiro-servicos.component';

describe('ParceiroServicosComponent', () => {
  let component: ParceiroServicosComponent;
  let fixture: ComponentFixture<ParceiroServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceiroServicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceiroServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

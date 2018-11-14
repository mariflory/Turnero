import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorTurnosComponent } from './visualizador-turnos.component';

describe('VisualizadorTurnosComponent', () => {
  let component: VisualizadorTurnosComponent;
  let fixture: ComponentFixture<VisualizadorTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizadorTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

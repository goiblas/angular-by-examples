import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaResultadoComponent } from './vista-resultado.component';

describe('VistaResultadoComponent', () => {
  let component: VistaResultadoComponent;
  let fixture: ComponentFixture<VistaResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

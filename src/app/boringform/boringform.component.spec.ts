import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoringformComponent } from './boringform.component';

describe('BoringformComponent', () => {
  let component: BoringformComponent;
  let fixture: ComponentFixture<BoringformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoringformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoringformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

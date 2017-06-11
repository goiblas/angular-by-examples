import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBoringformComponent } from './generate-boringform.component';

describe('GenerateBoringformComponent', () => {
  let component: GenerateBoringformComponent;
  let fixture: ComponentFixture<GenerateBoringformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBoringformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBoringformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

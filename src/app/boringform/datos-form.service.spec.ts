import { TestBed, inject } from '@angular/core/testing';

import { DatosFormService } from './datos-form.service';

describe('DatosFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosFormService]
    });
  });

  it('should be created', inject([DatosFormService], (service: DatosFormService) => {
    expect(service).toBeTruthy();
  }));
});

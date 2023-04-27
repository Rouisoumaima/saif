import { TestBed } from '@angular/core/testing';

describe('RegistrationService', () => {
  let service: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestBed);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

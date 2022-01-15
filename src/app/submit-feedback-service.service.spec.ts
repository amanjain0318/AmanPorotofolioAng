import { TestBed } from '@angular/core/testing';

import { SubmitFeedbackServiceService } from './submit-feedback-service.service';

describe('SubmitFeedbackServiceService', () => {
  let service: SubmitFeedbackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitFeedbackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

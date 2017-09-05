/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TranslateAPIService } from './translate-api.service';

describe('TranslateAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateAPIService]
    });
  });

  it('should ...', inject([TranslateAPIService], (service: TranslateAPIService) => {
    expect(service).toBeTruthy();
  }));
});

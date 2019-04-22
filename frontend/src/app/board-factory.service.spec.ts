import { TestBed } from '@angular/core/testing';

import { BoardFactoryService } from './board-factory.service';

describe('BoardFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardFactoryService = TestBed.get(BoardFactoryService);
    expect(service).toBeTruthy();
  });
});

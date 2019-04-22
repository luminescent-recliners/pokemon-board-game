import { TestBed } from '@angular/core/testing';

import { GameDashboardService } from './game-dashboard.service';

describe('GameDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameDashboardService = TestBed.get(GameDashboardService);
    expect(service).toBeTruthy();
  });
});

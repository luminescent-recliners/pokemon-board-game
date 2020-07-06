import { TestBed } from '@angular/core/testing';

import { PokemonSocketService } from './pokemon-socket.service';

describe('PokemonSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonSocketService = TestBed.get(PokemonSocketService);
    expect(service).toBeTruthy();
  });
});

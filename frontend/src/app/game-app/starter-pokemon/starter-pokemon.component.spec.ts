import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterPokemonComponent } from './starter-pokemon.component';

describe('StarterPokemonComponent', () => {
  let component: StarterPokemonComponent;
  let fixture: ComponentFixture<StarterPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

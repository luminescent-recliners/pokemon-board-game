import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPanelComponent } from './pokemon-panel.component';

describe('PokemonPanelComponent', () => {
  let component: PokemonPanelComponent;
  let fixture: ComponentFixture<PokemonPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

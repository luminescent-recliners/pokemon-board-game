import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturePokemonComponent } from './capture-pokemon.component';

describe('CapturePokemonComponent', () => {
  let component: CapturePokemonComponent;
  let fixture: ComponentFixture<CapturePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

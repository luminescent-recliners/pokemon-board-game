import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLobbyComponent } from './resume-lobby.component';

describe('ResumeLobbyComponent', () => {
  let component: ResumeLobbyComponent;
  let fixture: ComponentFixture<ResumeLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

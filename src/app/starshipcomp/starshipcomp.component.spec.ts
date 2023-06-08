import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipcompComponent } from './starshipcomp.component';

describe('StarshipcompComponent', () => {
  let component: StarshipcompComponent;
  let fixture: ComponentFixture<StarshipcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipcompComponent]
    });
    fixture = TestBed.createComponent(StarshipcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetcompComponent } from './planetcomp.component';

describe('PlanetcompComponent', () => {
  let component: PlanetcompComponent;
  let fixture: ComponentFixture<PlanetcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetcompComponent]
    });
    fixture = TestBed.createComponent(PlanetcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

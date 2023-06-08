import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplecompComponent } from './peoplecomp.component';

describe('PeoplecompComponent', () => {
  let component: PeoplecompComponent;
  let fixture: ComponentFixture<PeoplecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplecompComponent]
    });
    fixture = TestBed.createComponent(PeoplecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

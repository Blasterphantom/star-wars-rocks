import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiTable3Component } from './material-ui-table3.component';

describe('MaterialUiTable3Component', () => {
  let component: MaterialUiTable3Component;
  let fixture: ComponentFixture<MaterialUiTable3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialUiTable3Component]
    });
    fixture = TestBed.createComponent(MaterialUiTable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiTable2Component } from './material-ui-table2.component';

describe('MaterialUiTable2Component', () => {
  let component: MaterialUiTable2Component;
  let fixture: ComponentFixture<MaterialUiTable2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialUiTable2Component]
    });
    fixture = TestBed.createComponent(MaterialUiTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

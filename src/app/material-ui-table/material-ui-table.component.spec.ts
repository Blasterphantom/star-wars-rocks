import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUiTableComponent } from './material-ui-table.component';

describe('MaterialUiTableComponent', () => {
  let component: MaterialUiTableComponent;
  let fixture: ComponentFixture<MaterialUiTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialUiTableComponent]
    });
    fixture = TestBed.createComponent(MaterialUiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

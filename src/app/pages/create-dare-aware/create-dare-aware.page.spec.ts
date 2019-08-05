import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDareAwarePage } from './create-dare-aware.page';

describe('CreateDareAwarePage', () => {
  let component: CreateDareAwarePage;
  let fixture: ComponentFixture<CreateDareAwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDareAwarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDareAwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

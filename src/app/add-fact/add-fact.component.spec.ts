import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactComponent } from './add-fact.component';

describe('AddFactComponent', () => {
  let component: AddFactComponent;
  let fixture: ComponentFixture<AddFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

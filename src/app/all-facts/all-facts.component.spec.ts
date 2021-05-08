import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFactsComponent } from './all-facts.component';

describe('AllFactsComponent', () => {
  let component: AllFactsComponent;
  let fixture: ComponentFixture<AllFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFactsComponent } from './my-facts.component';

describe('MyFactsComponent', () => {
  let component: MyFactsComponent;
  let fixture: ComponentFixture<MyFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

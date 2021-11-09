import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentsComponent } from './allstudents.component';

describe('AllstudentsComponent', () => {
  let component: AllstudentsComponent;
  let fixture: ComponentFixture<AllstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

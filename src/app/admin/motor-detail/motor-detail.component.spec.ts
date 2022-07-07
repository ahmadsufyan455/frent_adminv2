import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDetailComponent } from './motor-detail.component';

describe('MotorDetailComponent', () => {
  let component: MotorDetailComponent;
  let fixture: ComponentFixture<MotorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBackgroundComponent } from './common-background.component';

describe('CommonBackgroundComponent', () => {
  let component: CommonBackgroundComponent;
  let fixture: ComponentFixture<CommonBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

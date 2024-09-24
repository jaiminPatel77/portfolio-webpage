import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoreProjectsComponent } from './more-proyects.component';

describe('MoreProjectsComponent', () => {
  let component: MoreProjectsComponent;
  let fixture: ComponentFixture<MoreProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

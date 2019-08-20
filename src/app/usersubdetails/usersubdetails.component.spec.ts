import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersubdetailsComponent } from './usersubdetails.component';

describe('UsersubdetailsComponent', () => {
  let component: UsersubdetailsComponent;
  let fixture: ComponentFixture<UsersubdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersubdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersubdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
